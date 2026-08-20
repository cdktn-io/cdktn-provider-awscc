# `entityresolutionIdMappingWorkflow` Submodule <a name="`entityresolutionIdMappingWorkflow` Submodule" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionIdMappingWorkflow <a name="EntityresolutionIdMappingWorkflow" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id_mapping_techniques: EntityresolutionIdMappingWorkflowIdMappingTechniques,
  input_source_config: IResolvable | typing.List[EntityresolutionIdMappingWorkflowInputSourceConfig],
  role_arn: str,
  workflow_name: str,
  description: str = None,
  id_mapping_incremental_run_config: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig = None,
  output_source_config: IResolvable | typing.List[EntityresolutionIdMappingWorkflowOutputSourceConfig] = None,
  tags: IResolvable | typing.List[EntityresolutionIdMappingWorkflowTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.idMappingTechniques">id_mapping_techniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.inputSourceConfig">input_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.workflowName">workflow_name</a></code> | <code>str</code> | The name of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.idMappingIncrementalRunConfig">id_mapping_incremental_run_config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.outputSourceConfig">output_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id_mapping_techniques`<sup>Required</sup> <a name="id_mapping_techniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.idMappingTechniques"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}.

---

##### `input_source_config`<sup>Required</sup> <a name="input_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.inputSourceConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}.

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.workflowName"></a>

- *Type:* str

The name of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#workflow_name EntityresolutionIdMappingWorkflow#workflow_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.description"></a>

- *Type:* str

The description of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#description EntityresolutionIdMappingWorkflow#description}

---

##### `id_mapping_incremental_run_config`<sup>Optional</sup> <a name="id_mapping_incremental_run_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.idMappingIncrementalRunConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}.

---

##### `output_source_config`<sup>Optional</sup> <a name="output_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.outputSourceConfig"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig">put_id_mapping_incremental_run_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques">put_id_mapping_techniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig">put_input_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig">put_output_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetIdMappingIncrementalRunConfig">reset_id_mapping_incremental_run_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOutputSourceConfig">reset_output_source_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_id_mapping_incremental_run_config` <a name="put_id_mapping_incremental_run_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig"></a>

```python
def put_id_mapping_incremental_run_config(
  incremental_run_type: str = None
) -> None
```

###### `incremental_run_type`<sup>Optional</sup> <a name="incremental_run_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingIncrementalRunConfig.parameter.incrementalRunType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}.

---

##### `put_id_mapping_techniques` <a name="put_id_mapping_techniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques"></a>

```python
def put_id_mapping_techniques(
  id_mapping_type: str = None,
  normalization_version: str = None,
  provider_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties = None,
  rule_based_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties = None
) -> None
```

###### `id_mapping_type`<sup>Optional</sup> <a name="id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques.parameter.idMappingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}.

---

###### `normalization_version`<sup>Optional</sup> <a name="normalization_version" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques.parameter.normalizationVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}.

---

###### `provider_properties`<sup>Optional</sup> <a name="provider_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques.parameter.providerProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}.

---

###### `rule_based_properties`<sup>Optional</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putIdMappingTechniques.parameter.ruleBasedProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}.

---

##### `put_input_source_config` <a name="put_input_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig"></a>

```python
def put_input_source_config(
  value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowInputSourceConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putInputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]

---

##### `put_output_source_config` <a name="put_output_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig"></a>

```python
def put_output_source_config(
  value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowOutputSourceConfig]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putOutputSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id_mapping_incremental_run_config` <a name="reset_id_mapping_incremental_run_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetIdMappingIncrementalRunConfig"></a>

```python
def reset_id_mapping_incremental_run_config() -> None
```

##### `reset_output_source_config` <a name="reset_output_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetOutputSourceConfig"></a>

```python
def reset_output_source_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EntityresolutionIdMappingWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EntityresolutionIdMappingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionIdMappingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig">id_mapping_incremental_run_config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniques">id_mapping_techniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfig">input_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList">EntityresolutionIdMappingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfig">output_source_config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList">EntityresolutionIdMappingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList">EntityresolutionIdMappingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowArn">workflow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfigInput">id_mapping_incremental_run_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniquesInput">id_mapping_techniques_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfigInput">input_source_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfigInput">output_source_config_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowNameInput">workflow_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowName">workflow_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_mapping_incremental_run_config`<sup>Required</sup> <a name="id_mapping_incremental_run_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig"></a>

```python
id_mapping_incremental_run_config: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a>

---

##### `id_mapping_techniques`<sup>Required</sup> <a name="id_mapping_techniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniques"></a>

```python
id_mapping_techniques: EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a>

---

##### `input_source_config`<sup>Required</sup> <a name="input_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfig"></a>

```python
input_source_config: EntityresolutionIdMappingWorkflowInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList">EntityresolutionIdMappingWorkflowInputSourceConfigList</a>

---

##### `output_source_config`<sup>Required</sup> <a name="output_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfig"></a>

```python
output_source_config: EntityresolutionIdMappingWorkflowOutputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList">EntityresolutionIdMappingWorkflowOutputSourceConfigList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tags"></a>

```python
tags: EntityresolutionIdMappingWorkflowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList">EntityresolutionIdMappingWorkflowTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `workflow_arn`<sup>Required</sup> <a name="workflow_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowArn"></a>

```python
workflow_arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_mapping_incremental_run_config_input`<sup>Optional</sup> <a name="id_mapping_incremental_run_config_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfigInput"></a>

```python
id_mapping_incremental_run_config_input: IResolvable | EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---

##### `id_mapping_techniques_input`<sup>Optional</sup> <a name="id_mapping_techniques_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.idMappingTechniquesInput"></a>

```python
id_mapping_techniques_input: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniques
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---

##### `input_source_config_input`<sup>Optional</sup> <a name="input_source_config_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.inputSourceConfigInput"></a>

```python
input_source_config_input: IResolvable | typing.List[EntityresolutionIdMappingWorkflowInputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]

---

##### `output_source_config_input`<sup>Optional</sup> <a name="output_source_config_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.outputSourceConfigInput"></a>

```python
output_source_config_input: IResolvable | typing.List[EntityresolutionIdMappingWorkflowOutputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EntityresolutionIdMappingWorkflowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]

---

##### `workflow_name_input`<sup>Optional</sup> <a name="workflow_name_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowNameInput"></a>

```python
workflow_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionIdMappingWorkflowConfig <a name="EntityresolutionIdMappingWorkflowConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id_mapping_techniques: EntityresolutionIdMappingWorkflowIdMappingTechniques,
  input_source_config: IResolvable | typing.List[EntityresolutionIdMappingWorkflowInputSourceConfig],
  role_arn: str,
  workflow_name: str,
  description: str = None,
  id_mapping_incremental_run_config: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig = None,
  output_source_config: IResolvable | typing.List[EntityresolutionIdMappingWorkflowOutputSourceConfig] = None,
  tags: IResolvable | typing.List[EntityresolutionIdMappingWorkflowTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingTechniques">id_mapping_techniques</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.inputSourceConfig">input_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.workflowName">workflow_name</a></code> | <code>str</code> | The name of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.description">description</a></code> | <code>str</code> | The description of the IdMappingWorkflow. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingIncrementalRunConfig">id_mapping_incremental_run_config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.outputSourceConfig">output_source_config</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id_mapping_techniques`<sup>Required</sup> <a name="id_mapping_techniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingTechniques"></a>

```python
id_mapping_techniques: EntityresolutionIdMappingWorkflowIdMappingTechniques
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_techniques EntityresolutionIdMappingWorkflow#id_mapping_techniques}.

---

##### `input_source_config`<sup>Required</sup> <a name="input_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.inputSourceConfig"></a>

```python
input_source_config: IResolvable | typing.List[EntityresolutionIdMappingWorkflowInputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_config EntityresolutionIdMappingWorkflow#input_source_config}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#role_arn EntityresolutionIdMappingWorkflow#role_arn}.

---

##### `workflow_name`<sup>Required</sup> <a name="workflow_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.workflowName"></a>

```python
workflow_name: str
```

- *Type:* str

The name of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#workflow_name EntityresolutionIdMappingWorkflow#workflow_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the IdMappingWorkflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#description EntityresolutionIdMappingWorkflow#description}

---

##### `id_mapping_incremental_run_config`<sup>Optional</sup> <a name="id_mapping_incremental_run_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.idMappingIncrementalRunConfig"></a>

```python
id_mapping_incremental_run_config: EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_incremental_run_config EntityresolutionIdMappingWorkflow#id_mapping_incremental_run_config}.

---

##### `output_source_config`<sup>Optional</sup> <a name="output_source_config" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.outputSourceConfig"></a>

```python
output_source_config: IResolvable | typing.List[EntityresolutionIdMappingWorkflowOutputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_source_config EntityresolutionIdMappingWorkflow#output_source_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EntityresolutionIdMappingWorkflowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#tags EntityresolutionIdMappingWorkflow#tags}.

---

### EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig <a name="EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig(
  incremental_run_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.property.incrementalRunType">incremental_run_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}. |

---

##### `incremental_run_type`<sup>Optional</sup> <a name="incremental_run_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.property.incrementalRunType"></a>

```python
incremental_run_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#incremental_run_type EntityresolutionIdMappingWorkflow#incremental_run_type}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniques <a name="EntityresolutionIdMappingWorkflowIdMappingTechniques" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques(
  id_mapping_type: str = None,
  normalization_version: str = None,
  provider_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties = None,
  rule_based_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.idMappingType">id_mapping_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.normalizationVersion">normalization_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.providerProperties">provider_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.ruleBasedProperties">rule_based_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}. |

---

##### `id_mapping_type`<sup>Optional</sup> <a name="id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.idMappingType"></a>

```python
id_mapping_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#id_mapping_type EntityresolutionIdMappingWorkflow#id_mapping_type}.

---

##### `normalization_version`<sup>Optional</sup> <a name="normalization_version" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.normalizationVersion"></a>

```python
normalization_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#normalization_version EntityresolutionIdMappingWorkflow#normalization_version}.

---

##### `provider_properties`<sup>Optional</sup> <a name="provider_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.providerProperties"></a>

```python
provider_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_properties EntityresolutionIdMappingWorkflow#provider_properties}.

---

##### `rule_based_properties`<sup>Optional</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques.property.ruleBasedProperties"></a>

```python
rule_based_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_based_properties EntityresolutionIdMappingWorkflow#rule_based_properties}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties(
  intermediate_source_configuration: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration = None,
  provider_configuration: typing.Mapping[str] = None,
  provider_service_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.intermediateSourceConfiguration">intermediate_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerConfiguration">provider_configuration</a></code> | <code>typing.Mapping[str]</code> | Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerServiceArn">provider_service_arn</a></code> | <code>str</code> | Arn of the Provider Service being used. |

---

##### `intermediate_source_configuration`<sup>Optional</sup> <a name="intermediate_source_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.intermediateSourceConfiguration"></a>

```python
intermediate_source_configuration: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}.

---

##### `provider_configuration`<sup>Optional</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerConfiguration"></a>

```python
provider_configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_configuration EntityresolutionIdMappingWorkflow#provider_configuration}

---

##### `provider_service_arn`<sup>Optional</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.property.providerServiceArn"></a>

```python
provider_service_arn: str
```

- *Type:* str

Arn of the Provider Service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_service_arn EntityresolutionIdMappingWorkflow#provider_service_arn}

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration(
  intermediate_s3_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path">intermediate_s3_path</a></code> | <code>str</code> | The s3 path that would be used to stage the intermediate data being generated during workflow execution. |

---

##### `intermediate_s3_path`<sup>Optional</sup> <a name="intermediate_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.property.intermediateS3Path"></a>

```python
intermediate_s3_path: str
```

- *Type:* str

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_s3_path EntityresolutionIdMappingWorkflow#intermediate_s3_path}

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties(
  attribute_matching_model: str = None,
  record_matching_model: str = None,
  rule_definition_type: str = None,
  rules: IResolvable | typing.List[EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.recordMatchingModel">record_matching_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.ruleDefinitionType">rule_definition_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}. |

---

##### `attribute_matching_model`<sup>Optional</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}.

---

##### `record_matching_model`<sup>Optional</sup> <a name="record_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.recordMatchingModel"></a>

```python
record_matching_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}.

---

##### `rule_definition_type`<sup>Optional</sup> <a name="rule_definition_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.ruleDefinitionType"></a>

```python
rule_definition_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.property.rules"></a>

```python
rules: IResolvable | typing.List[EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}.

---

### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules(
  matching_keys: typing.List[str] = None,
  rule_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.matchingKeys">matching_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}. |

---

##### `matching_keys`<sup>Optional</sup> <a name="matching_keys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.matchingKeys"></a>

```python
matching_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#matching_keys EntityresolutionIdMappingWorkflow#matching_keys}.

---

##### `rule_name`<sup>Optional</sup> <a name="rule_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_name EntityresolutionIdMappingWorkflow#rule_name}.

---

### EntityresolutionIdMappingWorkflowInputSourceConfig <a name="EntityresolutionIdMappingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig(
  input_source_arn: str,
  schema_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.inputSourceArn">input_source_arn</a></code> | <code>str</code> | An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.schemaArn">schema_arn</a></code> | <code>str</code> | The SchemaMapping arn associated with the Schema. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}. |

---

##### `input_source_arn`<sup>Required</sup> <a name="input_source_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.inputSourceArn"></a>

```python
input_source_arn: str
```

- *Type:* str

An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#input_source_arn EntityresolutionIdMappingWorkflow#input_source_arn}

---

##### `schema_arn`<sup>Optional</sup> <a name="schema_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

The SchemaMapping arn associated with the Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#schema_arn EntityresolutionIdMappingWorkflow#schema_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#type EntityresolutionIdMappingWorkflow#type}.

---

### EntityresolutionIdMappingWorkflowOutputSourceConfig <a name="EntityresolutionIdMappingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig(
  kms_arn: str = None,
  output_s3_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.kmsArn">kms_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.outputS3Path">output_s3_path</a></code> | <code>str</code> | The S3 path to which Entity Resolution will write the output table. |

---

##### `kms_arn`<sup>Optional</sup> <a name="kms_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#kms_arn EntityresolutionIdMappingWorkflow#kms_arn}.

---

##### `output_s3_path`<sup>Optional</sup> <a name="output_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig.property.outputS3Path"></a>

```python
output_s3_path: str
```

- *Type:* str

The S3 path to which Entity Resolution will write the output table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#output_s3_path EntityresolutionIdMappingWorkflow#output_s3_path}

---

### EntityresolutionIdMappingWorkflowTags <a name="EntityresolutionIdMappingWorkflowTags" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#key EntityresolutionIdMappingWorkflow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#value EntityresolutionIdMappingWorkflow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resetIncrementalRunType">reset_incremental_run_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_incremental_run_type` <a name="reset_incremental_run_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resetIncrementalRunType"></a>

```python
def reset_incremental_run_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunTypeInput">incremental_run_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType">incremental_run_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `incremental_run_type_input`<sup>Optional</sup> <a name="incremental_run_type_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunTypeInput"></a>

```python
incremental_run_type_input: str
```

- *Type:* str

---

##### `incremental_run_type`<sup>Required</sup> <a name="incremental_run_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```python
incremental_run_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">EntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties">put_provider_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties">put_rule_based_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetIdMappingType">reset_id_mapping_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetNormalizationVersion">reset_normalization_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetProviderProperties">reset_provider_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetRuleBasedProperties">reset_rule_based_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_properties` <a name="put_provider_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties"></a>

```python
def put_provider_properties(
  intermediate_source_configuration: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration = None,
  provider_configuration: typing.Mapping[str] = None,
  provider_service_arn: str = None
) -> None
```

###### `intermediate_source_configuration`<sup>Optional</sup> <a name="intermediate_source_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties.parameter.intermediateSourceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_source_configuration EntityresolutionIdMappingWorkflow#intermediate_source_configuration}.

---

###### `provider_configuration`<sup>Optional</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties.parameter.providerConfiguration"></a>

- *Type:* typing.Mapping[str]

Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_configuration EntityresolutionIdMappingWorkflow#provider_configuration}

---

###### `provider_service_arn`<sup>Optional</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putProviderProperties.parameter.providerServiceArn"></a>

- *Type:* str

Arn of the Provider Service being used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#provider_service_arn EntityresolutionIdMappingWorkflow#provider_service_arn}

---

##### `put_rule_based_properties` <a name="put_rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties"></a>

```python
def put_rule_based_properties(
  attribute_matching_model: str = None,
  record_matching_model: str = None,
  rule_definition_type: str = None,
  rules: IResolvable | typing.List[EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules] = None
) -> None
```

###### `attribute_matching_model`<sup>Optional</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties.parameter.attributeMatchingModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#attribute_matching_model EntityresolutionIdMappingWorkflow#attribute_matching_model}.

---

###### `record_matching_model`<sup>Optional</sup> <a name="record_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties.parameter.recordMatchingModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#record_matching_model EntityresolutionIdMappingWorkflow#record_matching_model}.

---

###### `rule_definition_type`<sup>Optional</sup> <a name="rule_definition_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties.parameter.ruleDefinitionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rule_definition_type EntityresolutionIdMappingWorkflow#rule_definition_type}.

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.putRuleBasedProperties.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#rules EntityresolutionIdMappingWorkflow#rules}.

---

##### `reset_id_mapping_type` <a name="reset_id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetIdMappingType"></a>

```python
def reset_id_mapping_type() -> None
```

##### `reset_normalization_version` <a name="reset_normalization_version" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetNormalizationVersion"></a>

```python
def reset_normalization_version() -> None
```

##### `reset_provider_properties` <a name="reset_provider_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetProviderProperties"></a>

```python
def reset_provider_properties() -> None
```

##### `reset_rule_based_properties` <a name="reset_rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resetRuleBasedProperties"></a>

```python
def reset_rule_based_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties">provider_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties">rule_based_properties</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingTypeInput">id_mapping_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersionInput">normalization_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerPropertiesInput">provider_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedPropertiesInput">rule_based_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType">id_mapping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion">normalization_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provider_properties`<sup>Required</sup> <a name="provider_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties"></a>

```python
provider_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a>

---

##### `rule_based_properties`<sup>Required</sup> <a name="rule_based_properties" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties"></a>

```python
rule_based_properties: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `id_mapping_type_input`<sup>Optional</sup> <a name="id_mapping_type_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingTypeInput"></a>

```python
id_mapping_type_input: str
```

- *Type:* str

---

##### `normalization_version_input`<sup>Optional</sup> <a name="normalization_version_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersionInput"></a>

```python
normalization_version_input: str
```

- *Type:* str

---

##### `provider_properties_input`<sup>Optional</sup> <a name="provider_properties_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerPropertiesInput"></a>

```python
provider_properties_input: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---

##### `rule_based_properties_input`<sup>Optional</sup> <a name="rule_based_properties_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedPropertiesInput"></a>

```python
rule_based_properties_input: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---

##### `id_mapping_type`<sup>Required</sup> <a name="id_mapping_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType"></a>

```python
id_mapping_type: str
```

- *Type:* str

---

##### `normalization_version`<sup>Required</sup> <a name="normalization_version" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion"></a>

```python
normalization_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniques
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniques">EntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path">reset_intermediate_s3_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_intermediate_s3_path` <a name="reset_intermediate_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resetIntermediateS3Path"></a>

```python
def reset_intermediate_s3_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput">intermediate_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">intermediate_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_s3_path_input`<sup>Optional</sup> <a name="intermediate_s3_path_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3PathInput"></a>

```python
intermediate_s3_path_input: str
```

- *Type:* str

---

##### `intermediate_s3_path`<sup>Required</sup> <a name="intermediate_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```python
intermediate_s3_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration">put_intermediate_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration">reset_intermediate_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderConfiguration">reset_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderServiceArn">reset_provider_service_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_intermediate_source_configuration` <a name="put_intermediate_source_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration"></a>

```python
def put_intermediate_source_configuration(
  intermediate_s3_path: str = None
) -> None
```

###### `intermediate_s3_path`<sup>Optional</sup> <a name="intermediate_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.putIntermediateSourceConfiguration.parameter.intermediateS3Path"></a>

- *Type:* str

The s3 path that would be used to stage the intermediate data being generated during workflow execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/entityresolution_id_mapping_workflow#intermediate_s3_path EntityresolutionIdMappingWorkflow#intermediate_s3_path}

---

##### `reset_intermediate_source_configuration` <a name="reset_intermediate_source_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetIntermediateSourceConfiguration"></a>

```python
def reset_intermediate_source_configuration() -> None
```

##### `reset_provider_configuration` <a name="reset_provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderConfiguration"></a>

```python
def reset_provider_configuration() -> None
```

##### `reset_provider_service_arn` <a name="reset_provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resetProviderServiceArn"></a>

```python
def reset_provider_service_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">intermediate_source_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput">intermediate_source_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput">provider_configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput">provider_service_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration">provider_configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn">provider_service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_source_configuration`<sup>Required</sup> <a name="intermediate_source_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```python
intermediate_source_configuration: EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `intermediate_source_configuration_input`<sup>Optional</sup> <a name="intermediate_source_configuration_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfigurationInput"></a>

```python
intermediate_source_configuration_input: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---

##### `provider_configuration_input`<sup>Optional</sup> <a name="provider_configuration_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfigurationInput"></a>

```python
provider_configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_service_arn_input`<sup>Optional</sup> <a name="provider_service_arn_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArnInput"></a>

```python
provider_service_arn_input: str
```

- *Type:* str

---

##### `provider_configuration`<sup>Required</sup> <a name="provider_configuration" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```python
provider_configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_service_arn`<sup>Required</sup> <a name="provider_service_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```python
provider_service_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel">reset_attribute_matching_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRecordMatchingModel">reset_record_matching_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRuleDefinitionType">reset_rule_definition_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]

---

##### `reset_attribute_matching_model` <a name="reset_attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetAttributeMatchingModel"></a>

```python
def reset_attribute_matching_model() -> None
```

##### `reset_record_matching_model` <a name="reset_record_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRecordMatchingModel"></a>

```python
def reset_record_matching_model() -> None
```

##### `reset_rule_definition_type` <a name="reset_rule_definition_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRuleDefinitionType"></a>

```python
def reset_rule_definition_type() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput">attribute_matching_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModelInput">record_matching_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypeInput">rule_definition_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel">record_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType">rule_definition_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```python
rules: EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a>

---

##### `attribute_matching_model_input`<sup>Optional</sup> <a name="attribute_matching_model_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModelInput"></a>

```python
attribute_matching_model_input: str
```

- *Type:* str

---

##### `record_matching_model_input`<sup>Optional</sup> <a name="record_matching_model_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModelInput"></a>

```python
record_matching_model_input: str
```

- *Type:* str

---

##### `rule_definition_type_input`<sup>Optional</sup> <a name="rule_definition_type_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypeInput"></a>

```python
rule_definition_type_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]

---

##### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

---

##### `record_matching_model`<sup>Required</sup> <a name="record_matching_model" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel"></a>

```python
record_matching_model: str
```

- *Type:* str

---

##### `rule_definition_type`<sup>Required</sup> <a name="rule_definition_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType"></a>

```python
rule_definition_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>]

---


### EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference <a name="EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys">reset_matching_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName">reset_rule_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_matching_keys` <a name="reset_matching_keys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetMatchingKeys"></a>

```python
def reset_matching_keys() -> None
```

##### `reset_rule_name` <a name="reset_rule_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resetRuleName"></a>

```python
def reset_rule_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput">matching_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">matching_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_keys_input`<sup>Optional</sup> <a name="matching_keys_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeysInput"></a>

```python
matching_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `matching_keys`<sup>Required</sup> <a name="matching_keys" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```python
matching_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">EntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>

---


### EntityresolutionIdMappingWorkflowInputSourceConfigList <a name="EntityresolutionIdMappingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowInputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>]

---


### EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference <a name="EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetSchemaArn">reset_schema_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schema_arn` <a name="reset_schema_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetSchemaArn"></a>

```python
def reset_schema_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput">input_source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArnInput">schema_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">input_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_source_arn_input`<sup>Optional</sup> <a name="input_source_arn_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArnInput"></a>

```python
input_source_arn_input: str
```

- *Type:* str

---

##### `schema_arn_input`<sup>Optional</sup> <a name="schema_arn_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArnInput"></a>

```python
schema_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `input_source_arn`<sup>Required</sup> <a name="input_source_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```python
input_source_arn: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowInputSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowInputSourceConfig">EntityresolutionIdMappingWorkflowInputSourceConfig</a>

---


### EntityresolutionIdMappingWorkflowOutputSourceConfigList <a name="EntityresolutionIdMappingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowOutputSourceConfig]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>]

---


### EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference <a name="EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetKmsArn">reset_kms_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path">reset_output_s3_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_arn` <a name="reset_kms_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetKmsArn"></a>

```python
def reset_kms_arn() -> None
```

##### `reset_output_s3_path` <a name="reset_output_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resetOutputS3Path"></a>

```python
def reset_output_s3_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput">kms_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput">output_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn">kms_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">output_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_arn_input`<sup>Optional</sup> <a name="kms_arn_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArnInput"></a>

```python
kms_arn_input: str
```

- *Type:* str

---

##### `output_s3_path_input`<sup>Optional</sup> <a name="output_s3_path_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3PathInput"></a>

```python
output_s3_path_input: str
```

- *Type:* str

---

##### `kms_arn`<sup>Required</sup> <a name="kms_arn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```python
kms_arn: str
```

- *Type:* str

---

##### `output_s3_path`<sup>Required</sup> <a name="output_s3_path" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```python
output_s3_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowOutputSourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowOutputSourceConfig">EntityresolutionIdMappingWorkflowOutputSourceConfig</a>

---


### EntityresolutionIdMappingWorkflowTagsList <a name="EntityresolutionIdMappingWorkflowTagsList" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionIdMappingWorkflowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionIdMappingWorkflowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>]

---


### EntityresolutionIdMappingWorkflowTagsOutputReference <a name="EntityresolutionIdMappingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_id_mapping_workflow

entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionIdMappingWorkflowTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionIdMappingWorkflow.EntityresolutionIdMappingWorkflowTags">EntityresolutionIdMappingWorkflowTags</a>

---



