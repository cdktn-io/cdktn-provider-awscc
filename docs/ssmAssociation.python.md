# `ssmAssociation` Submodule <a name="`ssmAssociation` Submodule" id="@cdktn/provider-awscc.ssmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmAssociation <a name="SsmAssociation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association awscc_ssm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociation(
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
  apply_only_at_cron_interval: bool | IResolvable = None,
  association_dispatch_assume_role: str = None,
  association_name: str = None,
  automation_target_parameter_name: str = None,
  calendar_names: typing.List[str] = None,
  compliance_severity: str = None,
  document_version: str = None,
  instance_id: str = None,
  max_concurrency: str = None,
  max_errors: str = None,
  output_location: SsmAssociationOutputLocation = None,
  parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  schedule_expression: str = None,
  schedule_offset: typing.Union[int, float] = None,
  sync_compliance: str = None,
  tags: IResolvable | typing.List[SsmAssociationTags] = None,
  targets: IResolvable | typing.List[SsmAssociationTargets] = None,
  wait_for_success_timeout_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the SSM document. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.applyOnlyAtCronInterval">apply_only_at_cron_interval</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationDispatchAssumeRole">association_dispatch_assume_role</a></code> | <code>str</code> | A role used by association to take actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationName">association_name</a></code> | <code>str</code> | The name of the association. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.automationTargetParameterName">automation_target_parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.calendarNames">calendar_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.complianceSeverity">compliance_severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.documentVersion">document_version</a></code> | <code>str</code> | The version of the SSM document to associate with the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance that the SSM document is associated with. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxConcurrency">max_concurrency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxErrors">max_errors</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | Parameter values that the SSM document uses at runtime. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | A Cron or Rate expression that specifies when the association is applied to the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.syncCompliance">sync_compliance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]</code> | The targets that the SSM document sends commands to. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.waitForSuccessTimeoutSeconds">wait_for_success_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.name"></a>

- *Type:* str

The name of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#name SsmAssociation#name}

---

##### `apply_only_at_cron_interval`<sup>Optional</sup> <a name="apply_only_at_cron_interval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.applyOnlyAtCronInterval"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `association_dispatch_assume_role`<sup>Optional</sup> <a name="association_dispatch_assume_role" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationDispatchAssumeRole"></a>

- *Type:* str

A role used by association to take actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_dispatch_assume_role SsmAssociation#association_dispatch_assume_role}

---

##### `association_name`<sup>Optional</sup> <a name="association_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationName"></a>

- *Type:* str

The name of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}

---

##### `automation_target_parameter_name`<sup>Optional</sup> <a name="automation_target_parameter_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.automationTargetParameterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `calendar_names`<sup>Optional</sup> <a name="calendar_names" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.calendarNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}.

---

##### `compliance_severity`<sup>Optional</sup> <a name="compliance_severity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.complianceSeverity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.documentVersion"></a>

- *Type:* str

The version of the SSM document to associate with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the instance that the SSM document is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxConcurrency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `max_errors`<sup>Optional</sup> <a name="max_errors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxErrors"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.outputLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Parameter values that the SSM document uses at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

A Cron or Rate expression that specifies when the association is applied to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}

---

##### `schedule_offset`<sup>Optional</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleOffset"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}.

---

##### `sync_compliance`<sup>Optional</sup> <a name="sync_compliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.syncCompliance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#tags SsmAssociation#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]

The targets that the SSM document sends commands to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#targets SsmAssociation#targets}

---

##### `wait_for_success_timeout_seconds`<sup>Optional</sup> <a name="wait_for_success_timeout_seconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.waitForSuccessTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation">put_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval">reset_apply_only_at_cron_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationDispatchAssumeRole">reset_association_dispatch_assume_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationName">reset_association_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName">reset_automation_target_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetCalendarNames">reset_calendar_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetComplianceSeverity">reset_compliance_severity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetDocumentVersion">reset_document_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxConcurrency">reset_max_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxErrors">reset_max_errors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOutputLocation">reset_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleOffset">reset_schedule_offset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetSyncCompliance">reset_sync_compliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTargets">reset_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds">reset_wait_for_success_timeout_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_output_location` <a name="put_output_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation"></a>

```python
def put_output_location(
  s3_location: SsmAssociationOutputLocationS3Location = None
) -> None
```

###### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation.parameter.s3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SsmAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[SsmAssociationTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]

---

##### `reset_apply_only_at_cron_interval` <a name="reset_apply_only_at_cron_interval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval"></a>

```python
def reset_apply_only_at_cron_interval() -> None
```

##### `reset_association_dispatch_assume_role` <a name="reset_association_dispatch_assume_role" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationDispatchAssumeRole"></a>

```python
def reset_association_dispatch_assume_role() -> None
```

##### `reset_association_name` <a name="reset_association_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationName"></a>

```python
def reset_association_name() -> None
```

##### `reset_automation_target_parameter_name` <a name="reset_automation_target_parameter_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName"></a>

```python
def reset_automation_target_parameter_name() -> None
```

##### `reset_calendar_names` <a name="reset_calendar_names" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetCalendarNames"></a>

```python
def reset_calendar_names() -> None
```

##### `reset_compliance_severity` <a name="reset_compliance_severity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetComplianceSeverity"></a>

```python
def reset_compliance_severity() -> None
```

##### `reset_document_version` <a name="reset_document_version" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetDocumentVersion"></a>

```python
def reset_document_version() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_max_concurrency` <a name="reset_max_concurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxConcurrency"></a>

```python
def reset_max_concurrency() -> None
```

##### `reset_max_errors` <a name="reset_max_errors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxErrors"></a>

```python
def reset_max_errors() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_schedule_offset` <a name="reset_schedule_offset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleOffset"></a>

```python
def reset_schedule_offset() -> None
```

##### `reset_sync_compliance` <a name="reset_sync_compliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetSyncCompliance"></a>

```python
def reset_sync_compliance() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTargets"></a>

```python
def reset_targets() -> None
```

##### `reset_wait_for_success_timeout_seconds` <a name="reset_wait_for_success_timeout_seconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds"></a>

```python
def reset_wait_for_success_timeout_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList">SsmAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput">apply_only_at_cron_interval_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRoleInput">association_dispatch_assume_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationNameInput">association_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput">automation_target_parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNamesInput">calendar_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverityInput">compliance_severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersionInput">document_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrencyInput">max_concurrency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrorsInput">max_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocationInput">output_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffsetInput">schedule_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncComplianceInput">sync_compliance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput">wait_for_success_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval">apply_only_at_cron_interval</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRole">association_dispatch_assume_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationName">association_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterName">automation_target_parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNames">calendar_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverity">compliance_severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrency">max_concurrency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrors">max_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncCompliance">sync_compliance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds">wait_for_success_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocation"></a>

```python
output_location: SsmAssociationOutputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tags"></a>

```python
tags: SsmAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList">SsmAssociationTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targets"></a>

```python
targets: SsmAssociationTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a>

---

##### `apply_only_at_cron_interval_input`<sup>Optional</sup> <a name="apply_only_at_cron_interval_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput"></a>

```python
apply_only_at_cron_interval_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `association_dispatch_assume_role_input`<sup>Optional</sup> <a name="association_dispatch_assume_role_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRoleInput"></a>

```python
association_dispatch_assume_role_input: str
```

- *Type:* str

---

##### `association_name_input`<sup>Optional</sup> <a name="association_name_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationNameInput"></a>

```python
association_name_input: str
```

- *Type:* str

---

##### `automation_target_parameter_name_input`<sup>Optional</sup> <a name="automation_target_parameter_name_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput"></a>

```python
automation_target_parameter_name_input: str
```

- *Type:* str

---

##### `calendar_names_input`<sup>Optional</sup> <a name="calendar_names_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNamesInput"></a>

```python
calendar_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compliance_severity_input`<sup>Optional</sup> <a name="compliance_severity_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverityInput"></a>

```python
compliance_severity_input: str
```

- *Type:* str

---

##### `document_version_input`<sup>Optional</sup> <a name="document_version_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersionInput"></a>

```python
document_version_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `max_concurrency_input`<sup>Optional</sup> <a name="max_concurrency_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrencyInput"></a>

```python
max_concurrency_input: str
```

- *Type:* str

---

##### `max_errors_input`<sup>Optional</sup> <a name="max_errors_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrorsInput"></a>

```python
max_errors_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocationInput"></a>

```python
output_location_input: IResolvable | SsmAssociationOutputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_offset_input`<sup>Optional</sup> <a name="schedule_offset_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffsetInput"></a>

```python
schedule_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_compliance_input`<sup>Optional</sup> <a name="sync_compliance_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncComplianceInput"></a>

```python
sync_compliance_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SsmAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[SsmAssociationTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]

---

##### `wait_for_success_timeout_seconds_input`<sup>Optional</sup> <a name="wait_for_success_timeout_seconds_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput"></a>

```python
wait_for_success_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `apply_only_at_cron_interval`<sup>Required</sup> <a name="apply_only_at_cron_interval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval"></a>

```python
apply_only_at_cron_interval: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `association_dispatch_assume_role`<sup>Required</sup> <a name="association_dispatch_assume_role" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRole"></a>

```python
association_dispatch_assume_role: str
```

- *Type:* str

---

##### `association_name`<sup>Required</sup> <a name="association_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationName"></a>

```python
association_name: str
```

- *Type:* str

---

##### `automation_target_parameter_name`<sup>Required</sup> <a name="automation_target_parameter_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterName"></a>

```python
automation_target_parameter_name: str
```

- *Type:* str

---

##### `calendar_names`<sup>Required</sup> <a name="calendar_names" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNames"></a>

```python
calendar_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compliance_severity`<sup>Required</sup> <a name="compliance_severity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverity"></a>

```python
compliance_severity: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrency"></a>

```python
max_concurrency: str
```

- *Type:* str

---

##### `max_errors`<sup>Required</sup> <a name="max_errors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrors"></a>

```python
max_errors: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_offset`<sup>Required</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sync_compliance`<sup>Required</sup> <a name="sync_compliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncCompliance"></a>

```python
sync_compliance: str
```

- *Type:* str

---

##### `wait_for_success_timeout_seconds`<sup>Required</sup> <a name="wait_for_success_timeout_seconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds"></a>

```python
wait_for_success_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmAssociationConfig <a name="SsmAssociationConfig" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  apply_only_at_cron_interval: bool | IResolvable = None,
  association_dispatch_assume_role: str = None,
  association_name: str = None,
  automation_target_parameter_name: str = None,
  calendar_names: typing.List[str] = None,
  compliance_severity: str = None,
  document_version: str = None,
  instance_id: str = None,
  max_concurrency: str = None,
  max_errors: str = None,
  output_location: SsmAssociationOutputLocation = None,
  parameters: IResolvable | typing.Mapping[typing.List[str]] = None,
  schedule_expression: str = None,
  schedule_offset: typing.Union[int, float] = None,
  sync_compliance: str = None,
  tags: IResolvable | typing.List[SsmAssociationTags] = None,
  targets: IResolvable | typing.List[SsmAssociationTargets] = None,
  wait_for_success_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.name">name</a></code> | <code>str</code> | The name of the SSM document. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval">apply_only_at_cron_interval</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationDispatchAssumeRole">association_dispatch_assume_role</a></code> | <code>str</code> | A role used by association to take actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationName">association_name</a></code> | <code>str</code> | The name of the association. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName">automation_target_parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.calendarNames">calendar_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.complianceSeverity">compliance_severity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.documentVersion">document_version</a></code> | <code>str</code> | The version of the SSM document to associate with the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance that the SSM document is associated with. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxConcurrency">max_concurrency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxErrors">max_errors</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | Parameter values that the SSM document uses at runtime. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | A Cron or Rate expression that specifies when the association is applied to the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.syncCompliance">sync_compliance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]</code> | The targets that the SSM document sends commands to. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds">wait_for_success_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#name SsmAssociation#name}

---

##### `apply_only_at_cron_interval`<sup>Optional</sup> <a name="apply_only_at_cron_interval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval"></a>

```python
apply_only_at_cron_interval: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `association_dispatch_assume_role`<sup>Optional</sup> <a name="association_dispatch_assume_role" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationDispatchAssumeRole"></a>

```python
association_dispatch_assume_role: str
```

- *Type:* str

A role used by association to take actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_dispatch_assume_role SsmAssociation#association_dispatch_assume_role}

---

##### `association_name`<sup>Optional</sup> <a name="association_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationName"></a>

```python
association_name: str
```

- *Type:* str

The name of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}

---

##### `automation_target_parameter_name`<sup>Optional</sup> <a name="automation_target_parameter_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName"></a>

```python
automation_target_parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `calendar_names`<sup>Optional</sup> <a name="calendar_names" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.calendarNames"></a>

```python
calendar_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}.

---

##### `compliance_severity`<sup>Optional</sup> <a name="compliance_severity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.complianceSeverity"></a>

```python
compliance_severity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `document_version`<sup>Optional</sup> <a name="document_version" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

The version of the SSM document to associate with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the instance that the SSM document is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}

---

##### `max_concurrency`<sup>Optional</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxConcurrency"></a>

```python
max_concurrency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `max_errors`<sup>Optional</sup> <a name="max_errors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxErrors"></a>

```python
max_errors: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.outputLocation"></a>

```python
output_location: SsmAssociationOutputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Parameter values that the SSM document uses at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

A Cron or Rate expression that specifies when the association is applied to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}

---

##### `schedule_offset`<sup>Optional</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}.

---

##### `sync_compliance`<sup>Optional</sup> <a name="sync_compliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.syncCompliance"></a>

```python
sync_compliance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SsmAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#tags SsmAssociation#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.targets"></a>

```python
targets: IResolvable | typing.List[SsmAssociationTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]

The targets that the SSM document sends commands to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#targets SsmAssociation#targets}

---

##### `wait_for_success_timeout_seconds`<sup>Optional</sup> <a name="wait_for_success_timeout_seconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds"></a>

```python
wait_for_success_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

### SsmAssociationOutputLocation <a name="SsmAssociationOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationOutputLocation(
  s3_location: SsmAssociationOutputLocationS3Location = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}. |

---

##### `s3_location`<sup>Optional</sup> <a name="s3_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.property.s3Location"></a>

```python
s3_location: SsmAssociationOutputLocationS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}.

---

### SsmAssociationOutputLocationS3Location <a name="SsmAssociationOutputLocationS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationOutputLocationS3Location(
  output_s3_bucket_name: str = None,
  output_s3_key_prefix: str = None,
  output_s3_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3KeyPrefix">output_s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3Region">output_s3_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}. |

---

##### `output_s3_bucket_name`<sup>Optional</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}.

---

##### `output_s3_key_prefix`<sup>Optional</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3KeyPrefix"></a>

```python
output_s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}.

---

##### `output_s3_region`<sup>Optional</sup> <a name="output_s3_region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3Region"></a>

```python
output_s3_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}.

---

### SsmAssociationTags <a name="SsmAssociationTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.key">key</a></code> | <code>str</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#value SsmAssociation#value}

---

### SsmAssociationTargets <a name="SsmAssociationTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationTargets(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#values SsmAssociation#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#values SsmAssociation#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmAssociationOutputLocationOutputReference <a name="SsmAssociationOutputLocationOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationOutputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location">put_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Location">reset_s3_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_location` <a name="put_s3_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location"></a>

```python
def put_s3_location(
  output_s3_bucket_name: str = None,
  output_s3_key_prefix: str = None,
  output_s3_region: str = None
) -> None
```

###### `output_s3_bucket_name`<sup>Optional</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location.parameter.outputS3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}.

---

###### `output_s3_key_prefix`<sup>Optional</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location.parameter.outputS3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}.

---

###### `output_s3_region`<sup>Optional</sup> <a name="output_s3_region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location.parameter.outputS3Region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}.

---

##### `reset_s3_location` <a name="reset_s3_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Location"></a>

```python
def reset_s3_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Location">s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference">SsmAssociationOutputLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3LocationInput">s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_location`<sup>Required</sup> <a name="s3_location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Location"></a>

```python
s3_location: SsmAssociationOutputLocationS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference">SsmAssociationOutputLocationS3LocationOutputReference</a>

---

##### `s3_location_input`<sup>Optional</sup> <a name="s3_location_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3LocationInput"></a>

```python
s3_location_input: IResolvable | SsmAssociationOutputLocationS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmAssociationOutputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---


### SsmAssociationOutputLocationS3LocationOutputReference <a name="SsmAssociationOutputLocationS3LocationOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3BucketName">reset_output_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3KeyPrefix">reset_output_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3Region">reset_output_s3_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_output_s3_bucket_name` <a name="reset_output_s3_bucket_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3BucketName"></a>

```python
def reset_output_s3_bucket_name() -> None
```

##### `reset_output_s3_key_prefix` <a name="reset_output_s3_key_prefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3KeyPrefix"></a>

```python
def reset_output_s3_key_prefix() -> None
```

##### `reset_output_s3_region` <a name="reset_output_s3_region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3Region"></a>

```python
def reset_output_s3_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketNameInput">output_s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefixInput">output_s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3RegionInput">output_s3_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefix">output_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3Region">output_s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_s3_bucket_name_input`<sup>Optional</sup> <a name="output_s3_bucket_name_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketNameInput"></a>

```python
output_s3_bucket_name_input: str
```

- *Type:* str

---

##### `output_s3_key_prefix_input`<sup>Optional</sup> <a name="output_s3_key_prefix_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefixInput"></a>

```python
output_s3_key_prefix_input: str
```

- *Type:* str

---

##### `output_s3_region_input`<sup>Optional</sup> <a name="output_s3_region_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3RegionInput"></a>

```python
output_s3_region_input: str
```

- *Type:* str

---

##### `output_s3_bucket_name`<sup>Required</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

---

##### `output_s3_key_prefix`<sup>Required</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefix"></a>

```python
output_s3_key_prefix: str
```

- *Type:* str

---

##### `output_s3_region`<sup>Required</sup> <a name="output_s3_region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3Region"></a>

```python
output_s3_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmAssociationOutputLocationS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---


### SsmAssociationTagsList <a name="SsmAssociationTagsList" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>]

---


### SsmAssociationTagsOutputReference <a name="SsmAssociationTagsOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>

---


### SsmAssociationTargetsList <a name="SsmAssociationTargetsList" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmAssociationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmAssociationTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>]

---


### SsmAssociationTargetsOutputReference <a name="SsmAssociationTargetsOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_association

ssmAssociation.SsmAssociationTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmAssociationTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>

---



