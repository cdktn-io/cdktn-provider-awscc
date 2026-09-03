# `stepfunctionsStateMachine` Submodule <a name="`stepfunctionsStateMachine` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachine <a name="StepfunctionsStateMachine" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine awscc_stepfunctions_state_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachine(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  definition: str = None,
  definition_s3_location: StepfunctionsStateMachineDefinitionS3Location = None,
  definition_string: str = None,
  definition_substitutions: typing.Mapping[str] = None,
  logging_configuration: StepfunctionsStateMachineLoggingConfiguration = None,
  state_machine_name: str = None,
  state_machine_type: str = None,
  tags: IResolvable | typing.List[StepfunctionsStateMachineTags] = None,
  tracing_configuration: StepfunctionsStateMachineTracingConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionString">definition_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionSubstitutions">definition_substitutions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineName">state_machine_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineType">state_machine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}.

---

##### `definition_s3_location`<sup>Optional</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}.

---

##### `definition_string`<sup>Optional</sup> <a name="definition_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}.

---

##### `definition_substitutions`<sup>Optional</sup> <a name="definition_substitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionSubstitutions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}.

---

##### `state_machine_name`<sup>Optional</sup> <a name="state_machine_name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}.

---

##### `state_machine_type`<sup>Optional</sup> <a name="state_machine_type" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}.

---

##### `tracing_configuration`<sup>Optional</sup> <a name="tracing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tracingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location">put_definition_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration">put_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration">put_tracing_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location">reset_definition_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString">reset_definition_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions">reset_definition_substitutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration">reset_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName">reset_state_machine_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType">reset_state_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration">reset_tracing_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_definition_s3_location` <a name="put_definition_s3_location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location"></a>

```python
def put_definition_s3_location(
  bucket: str = None,
  key: str = None,
  version: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}.

---

##### `put_logging_configuration` <a name="put_logging_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration"></a>

```python
def put_logging_configuration(
  destinations: IResolvable | typing.List[StepfunctionsStateMachineLoggingConfigurationDestinations] = None,
  include_execution_data: bool | IResolvable = None,
  level: str = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}.

---

###### `include_execution_data`<sup>Optional</sup> <a name="include_execution_data" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration.parameter.includeExecutionData"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}.

---

###### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[StepfunctionsStateMachineTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]

---

##### `put_tracing_configuration` <a name="put_tracing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration"></a>

```python
def put_tracing_configuration(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}.

---

##### `reset_definition` <a name="reset_definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_definition_s3_location` <a name="reset_definition_s3_location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location"></a>

```python
def reset_definition_s3_location() -> None
```

##### `reset_definition_string` <a name="reset_definition_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString"></a>

```python
def reset_definition_string() -> None
```

##### `reset_definition_substitutions` <a name="reset_definition_substitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions"></a>

```python
def reset_definition_substitutions() -> None
```

##### `reset_logging_configuration` <a name="reset_logging_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration"></a>

```python
def reset_logging_configuration() -> None
```

##### `reset_state_machine_name` <a name="reset_state_machine_name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName"></a>

```python
def reset_state_machine_name() -> None
```

##### `reset_state_machine_type` <a name="reset_state_machine_type" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType"></a>

```python
def reset_state_machine_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tracing_configuration` <a name="reset_tracing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration"></a>

```python
def reset_tracing_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StepfunctionsStateMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StepfunctionsStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput">definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput">definition_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput">definition_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput">definition_substitutions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput">logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput">state_machine_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput">state_machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput">tracing_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition">definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString">definition_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions">definition_substitutions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName">state_machine_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType">state_machine_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `definition_s3_location`<sup>Required</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location"></a>

```python
definition_s3_location: StepfunctionsStateMachineDefinitionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration"></a>

```python
logging_configuration: StepfunctionsStateMachineLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags"></a>

```python
tags: StepfunctionsStateMachineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a>

---

##### `tracing_configuration`<sup>Required</sup> <a name="tracing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration"></a>

```python
tracing_configuration: StepfunctionsStateMachineTracingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a>

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput"></a>

```python
definition_input: str
```

- *Type:* str

---

##### `definition_s3_location_input`<sup>Optional</sup> <a name="definition_s3_location_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput"></a>

```python
definition_s3_location_input: IResolvable | StepfunctionsStateMachineDefinitionS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `definition_string_input`<sup>Optional</sup> <a name="definition_string_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput"></a>

```python
definition_string_input: str
```

- *Type:* str

---

##### `definition_substitutions_input`<sup>Optional</sup> <a name="definition_substitutions_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput"></a>

```python
definition_substitutions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `logging_configuration_input`<sup>Optional</sup> <a name="logging_configuration_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput"></a>

```python
logging_configuration_input: IResolvable | StepfunctionsStateMachineLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `state_machine_name_input`<sup>Optional</sup> <a name="state_machine_name_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput"></a>

```python
state_machine_name_input: str
```

- *Type:* str

---

##### `state_machine_type_input`<sup>Optional</sup> <a name="state_machine_type_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput"></a>

```python
state_machine_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[StepfunctionsStateMachineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]

---

##### `tracing_configuration_input`<sup>Optional</sup> <a name="tracing_configuration_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput"></a>

```python
tracing_configuration_input: IResolvable | StepfunctionsStateMachineTracingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition"></a>

```python
definition: str
```

- *Type:* str

---

##### `definition_string`<sup>Required</sup> <a name="definition_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString"></a>

```python
definition_string: str
```

- *Type:* str

---

##### `definition_substitutions`<sup>Required</sup> <a name="definition_substitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions"></a>

```python
definition_substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `state_machine_name`<sup>Required</sup> <a name="state_machine_name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName"></a>

```python
state_machine_name: str
```

- *Type:* str

---

##### `state_machine_type`<sup>Required</sup> <a name="state_machine_type" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType"></a>

```python
state_machine_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineConfig <a name="StepfunctionsStateMachineConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  role_arn: str,
  definition: str = None,
  definition_s3_location: StepfunctionsStateMachineDefinitionS3Location = None,
  definition_string: str = None,
  definition_substitutions: typing.Mapping[str] = None,
  logging_configuration: StepfunctionsStateMachineLoggingConfiguration = None,
  state_machine_name: str = None,
  state_machine_type: str = None,
  tags: IResolvable | typing.List[StepfunctionsStateMachineTags] = None,
  tracing_configuration: StepfunctionsStateMachineTracingConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition">definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location">definition_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString">definition_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions">definition_substitutions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName">state_machine_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType">state_machine_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration">tracing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition"></a>

```python
definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}.

---

##### `definition_s3_location`<sup>Optional</sup> <a name="definition_s3_location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location"></a>

```python
definition_s3_location: StepfunctionsStateMachineDefinitionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}.

---

##### `definition_string`<sup>Optional</sup> <a name="definition_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString"></a>

```python
definition_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}.

---

##### `definition_substitutions`<sup>Optional</sup> <a name="definition_substitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions"></a>

```python
definition_substitutions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration"></a>

```python
logging_configuration: StepfunctionsStateMachineLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}.

---

##### `state_machine_name`<sup>Optional</sup> <a name="state_machine_name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName"></a>

```python
state_machine_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}.

---

##### `state_machine_type`<sup>Optional</sup> <a name="state_machine_type" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType"></a>

```python
state_machine_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[StepfunctionsStateMachineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}.

---

##### `tracing_configuration`<sup>Optional</sup> <a name="tracing_configuration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration"></a>

```python
tracing_configuration: StepfunctionsStateMachineTracingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}.

---

### StepfunctionsStateMachineDefinitionS3Location <a name="StepfunctionsStateMachineDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location(
  bucket: str = None,
  key: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}.

---

### StepfunctionsStateMachineLoggingConfiguration <a name="StepfunctionsStateMachineLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration(
  destinations: IResolvable | typing.List[StepfunctionsStateMachineLoggingConfigurationDestinations] = None,
  include_execution_data: bool | IResolvable = None,
  level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData">include_execution_data</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations"></a>

```python
destinations: IResolvable | typing.List[StepfunctionsStateMachineLoggingConfigurationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}.

---

##### `include_execution_data`<sup>Optional</sup> <a name="include_execution_data" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```python
include_execution_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinations <a name="StepfunctionsStateMachineLoggingConfigurationDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations(
  cloudwatch_logs_log_group: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup">cloudwatch_logs_log_group</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}. |

---

##### `cloudwatch_logs_log_group`<sup>Optional</sup> <a name="cloudwatch_logs_log_group" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup"></a>

```python
cloudwatch_logs_log_group: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup(
  log_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}. |

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}.

---

### StepfunctionsStateMachineTags <a name="StepfunctionsStateMachineTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}.

---

### StepfunctionsStateMachineTracingConfiguration <a name="StepfunctionsStateMachineTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineDefinitionS3LocationOutputReference <a name="StepfunctionsStateMachineDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineDefinitionS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsList <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StepfunctionsStateMachineLoggingConfigurationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup">put_cloudwatch_logs_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup">reset_cloudwatch_logs_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs_log_group` <a name="put_cloudwatch_logs_log_group" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup"></a>

```python
def put_cloudwatch_logs_log_group(
  log_group_arn: str = None
) -> None
```

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup.parameter.logGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}.

---

##### `reset_cloudwatch_logs_log_group` <a name="reset_cloudwatch_logs_log_group" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup"></a>

```python
def reset_cloudwatch_logs_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup">cloudwatch_logs_log_group</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput">cloudwatch_logs_log_group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group`<sup>Required</sup> <a name="cloudwatch_logs_log_group" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup"></a>

```python
cloudwatch_logs_log_group: StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a>

---

##### `cloudwatch_logs_log_group_input`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput"></a>

```python
cloudwatch_logs_log_group_input: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineLoggingConfigurationDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>

---


### StepfunctionsStateMachineLoggingConfigurationOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">reset_include_execution_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel">reset_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[StepfunctionsStateMachineLoggingConfigurationDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_include_execution_data` <a name="reset_include_execution_data" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```python
def reset_include_execution_data() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">include_execution_data_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">include_execution_data</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations"></a>

```python
destinations: StepfunctionsStateMachineLoggingConfigurationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[StepfunctionsStateMachineLoggingConfigurationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>]

---

##### `include_execution_data_input`<sup>Optional</sup> <a name="include_execution_data_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```python
include_execution_data_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `include_execution_data`<sup>Required</sup> <a name="include_execution_data" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```python
include_execution_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---


### StepfunctionsStateMachineTagsList <a name="StepfunctionsStateMachineTagsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StepfunctionsStateMachineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StepfunctionsStateMachineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>]

---


### StepfunctionsStateMachineTagsOutputReference <a name="StepfunctionsStateMachineTagsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>

---


### StepfunctionsStateMachineTracingConfigurationOutputReference <a name="StepfunctionsStateMachineTracingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import stepfunctions_state_machine

stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StepfunctionsStateMachineTracingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---



