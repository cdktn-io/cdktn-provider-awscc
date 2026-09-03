# `datapipelinePipeline` Submodule <a name="`datapipelinePipeline` Submodule" id="@cdktn/provider-awscc.datapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatapipelinePipeline <a name="DatapipelinePipeline" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipeline(
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
  activate: bool | IResolvable = None,
  description: str = None,
  parameter_objects: IResolvable | typing.List[DatapipelinePipelineParameterObjects] = None,
  parameter_values: IResolvable | typing.List[DatapipelinePipelineParameterValues] = None,
  pipeline_objects: IResolvable | typing.List[DatapipelinePipelinePipelineObjects] = None,
  pipeline_tags: IResolvable | typing.List[DatapipelinePipelinePipelineTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.activate">activate</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterObjects">parameter_objects</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]</code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterValues">parameter_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]</code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineObjects">pipeline_objects</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]</code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineTags">pipeline_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]</code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.name"></a>

- *Type:* str

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.activate"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.description"></a>

- *Type:* str

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `parameter_objects`<sup>Optional</sup> <a name="parameter_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterObjects"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `parameter_values`<sup>Optional</sup> <a name="parameter_values" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.parameterValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `pipeline_objects`<sup>Optional</sup> <a name="pipeline_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineObjects"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `pipeline_tags`<sup>Optional</sup> <a name="pipeline_tags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.Initializer.parameter.pipelineTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects">put_parameter_objects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues">put_parameter_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects">put_pipeline_objects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags">put_pipeline_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate">reset_activate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects">reset_parameter_objects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues">reset_parameter_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects">reset_pipeline_objects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags">reset_pipeline_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_parameter_objects` <a name="put_parameter_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects"></a>

```python
def put_parameter_objects(
  value: IResolvable | typing.List[DatapipelinePipelineParameterObjects]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterObjects.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]

---

##### `put_parameter_values` <a name="put_parameter_values" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues"></a>

```python
def put_parameter_values(
  value: IResolvable | typing.List[DatapipelinePipelineParameterValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putParameterValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]

---

##### `put_pipeline_objects` <a name="put_pipeline_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects"></a>

```python
def put_pipeline_objects(
  value: IResolvable | typing.List[DatapipelinePipelinePipelineObjects]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineObjects.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]

---

##### `put_pipeline_tags` <a name="put_pipeline_tags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags"></a>

```python
def put_pipeline_tags(
  value: IResolvable | typing.List[DatapipelinePipelinePipelineTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.putPipelineTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]

---

##### `reset_activate` <a name="reset_activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetActivate"></a>

```python
def reset_activate() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_parameter_objects` <a name="reset_parameter_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterObjects"></a>

```python
def reset_parameter_objects() -> None
```

##### `reset_parameter_values` <a name="reset_parameter_values" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetParameterValues"></a>

```python
def reset_parameter_values() -> None
```

##### `reset_pipeline_objects` <a name="reset_pipeline_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineObjects"></a>

```python
def reset_pipeline_objects() -> None
```

##### `reset_pipeline_tags` <a name="reset_pipeline_tags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.resetPipelineTags"></a>

```python
def reset_pipeline_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatapipelinePipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects">parameter_objects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues">parameter_values</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects">pipeline_objects</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags">pipeline_tags</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput">activate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput">parameter_objects_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput">parameter_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput">pipeline_objects_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput">pipeline_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate">activate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameter_objects`<sup>Required</sup> <a name="parameter_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjects"></a>

```python
parameter_objects: DatapipelinePipelineParameterObjectsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList">DatapipelinePipelineParameterObjectsList</a>

---

##### `parameter_values`<sup>Required</sup> <a name="parameter_values" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValues"></a>

```python
parameter_values: DatapipelinePipelineParameterValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList">DatapipelinePipelineParameterValuesList</a>

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `pipeline_objects`<sup>Required</sup> <a name="pipeline_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjects"></a>

```python
pipeline_objects: DatapipelinePipelinePipelineObjectsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList">DatapipelinePipelinePipelineObjectsList</a>

---

##### `pipeline_tags`<sup>Required</sup> <a name="pipeline_tags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTags"></a>

```python
pipeline_tags: DatapipelinePipelinePipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList">DatapipelinePipelinePipelineTagsList</a>

---

##### `activate_input`<sup>Optional</sup> <a name="activate_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activateInput"></a>

```python
activate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_objects_input`<sup>Optional</sup> <a name="parameter_objects_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterObjectsInput"></a>

```python
parameter_objects_input: IResolvable | typing.List[DatapipelinePipelineParameterObjects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]

---

##### `parameter_values_input`<sup>Optional</sup> <a name="parameter_values_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.parameterValuesInput"></a>

```python
parameter_values_input: IResolvable | typing.List[DatapipelinePipelineParameterValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]

---

##### `pipeline_objects_input`<sup>Optional</sup> <a name="pipeline_objects_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineObjectsInput"></a>

```python
pipeline_objects_input: IResolvable | typing.List[DatapipelinePipelinePipelineObjects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]

---

##### `pipeline_tags_input`<sup>Optional</sup> <a name="pipeline_tags_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.pipelineTagsInput"></a>

```python
pipeline_tags_input: IResolvable | typing.List[DatapipelinePipelinePipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.activate"></a>

```python
activate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatapipelinePipelineConfig <a name="DatapipelinePipelineConfig" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  activate: bool | IResolvable = None,
  description: str = None,
  parameter_objects: IResolvable | typing.List[DatapipelinePipelineParameterObjects] = None,
  parameter_values: IResolvable | typing.List[DatapipelinePipelineParameterValues] = None,
  pipeline_objects: IResolvable | typing.List[DatapipelinePipelinePipelineObjects] = None,
  pipeline_tags: IResolvable | typing.List[DatapipelinePipelinePipelineTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name">name</a></code> | <code>str</code> | The name of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate">activate</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to validate and start the pipeline or stop an active pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description">description</a></code> | <code>str</code> | A description of the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects">parameter_objects</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]</code> | The parameter objects used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues">parameter_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]</code> | The parameter values used with the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects">pipeline_objects</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]</code> | The objects that define the pipeline. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags">pipeline_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]</code> | A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

##### `activate`<sup>Optional</sup> <a name="activate" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.activate"></a>

```python
activate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to validate and start the pipeline or stop an active pipeline.

By default, the value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#activate DatapipelinePipeline#activate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#description DatapipelinePipeline#description}

---

##### `parameter_objects`<sup>Optional</sup> <a name="parameter_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterObjects"></a>

```python
parameter_objects: IResolvable | typing.List[DatapipelinePipelineParameterObjects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]

The parameter objects used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#parameter_objects DatapipelinePipeline#parameter_objects}

---

##### `parameter_values`<sup>Optional</sup> <a name="parameter_values" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.parameterValues"></a>

```python
parameter_values: IResolvable | typing.List[DatapipelinePipelineParameterValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]

The parameter values used with the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#parameter_values DatapipelinePipeline#parameter_values}

---

##### `pipeline_objects`<sup>Optional</sup> <a name="pipeline_objects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineObjects"></a>

```python
pipeline_objects: IResolvable | typing.List[DatapipelinePipelinePipelineObjects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]

The objects that define the pipeline.

These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#pipeline_objects DatapipelinePipeline#pipeline_objects}

---

##### `pipeline_tags`<sup>Optional</sup> <a name="pipeline_tags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineConfig.property.pipelineTags"></a>

```python
pipeline_tags: IResolvable | typing.List[DatapipelinePipelinePipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]

A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions.

For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#pipeline_tags DatapipelinePipeline#pipeline_tags}

---

### DatapipelinePipelineParameterObjects <a name="DatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterObjects(
  attributes: IResolvable | typing.List[DatapipelinePipelineParameterObjectsAttributes] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]</code> | The attributes of the parameter object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id">id</a></code> | <code>str</code> | The ID of the parameter object. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.attributes"></a>

```python
attributes: IResolvable | typing.List[DatapipelinePipelineParameterObjectsAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]

The attributes of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#attributes DatapipelinePipeline#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the parameter object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DatapipelinePipelineParameterObjectsAttributes <a name="DatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes(
  key: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key">key</a></code> | <code>str</code> | The field identifier. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue">string_value</a></code> | <code>str</code> | The field value, expressed as a String. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.key"></a>

```python
key: str
```

- *Type:* str

The field identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelineParameterValues <a name="DatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterValues(
  id: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id">id</a></code> | <code>str</code> | The ID of the parameter value. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue">string_value</a></code> | <code>str</code> | The field value, expressed as a String. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

The field value, expressed as a String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineObjects <a name="DatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineObjects(
  fields: IResolvable | typing.List[DatapipelinePipelinePipelineObjectsFields] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields">fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]</code> | Key-value pairs that define the properties of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id">id</a></code> | <code>str</code> | The ID of the object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name">name</a></code> | <code>str</code> | The name of the object. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.fields"></a>

```python
fields: IResolvable | typing.List[DatapipelinePipelinePipelineObjectsFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]

Key-value pairs that define the properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#fields DatapipelinePipeline#fields}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#id DatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#name DatapipelinePipeline#name}

---

### DatapipelinePipelinePipelineObjectsFields <a name="DatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields(
  key: str = None,
  ref_value: str = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key">key</a></code> | <code>str</code> | Specifies the name of a field for a particular object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue">ref_value</a></code> | <code>str</code> | A field value that you specify as an identifier of another object in the same pipeline definition. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue">string_value</a></code> | <code>str</code> | A field value that you specify as a string. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.key"></a>

```python
key: str
```

- *Type:* str

Specifies the name of a field for a particular object.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `ref_value`<sup>Optional</sup> <a name="ref_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.refValue"></a>

```python
ref_value: str
```

- *Type:* str

A field value that you specify as an identifier of another object in the same pipeline definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#ref_value DatapipelinePipeline#ref_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A field value that you specify as a string.

To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#string_value DatapipelinePipeline#string_value}

---

### DatapipelinePipelinePipelineTags <a name="DatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key">key</a></code> | <code>str</code> | The key name of a tag. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value">value</a></code> | <code>str</code> | The value to associate with the key name. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#key DatapipelinePipeline#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value to associate with the key name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datapipeline_pipeline#value DatapipelinePipeline#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatapipelinePipelineParameterObjectsAttributesList <a name="DatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineParameterObjectsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatapipelinePipelineParameterObjectsAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]

---


### DatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatapipelinePipelineParameterObjectsAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>

---


### DatapipelinePipelineParameterObjectsList <a name="DatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineParameterObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatapipelinePipelineParameterObjects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>]

---


### DatapipelinePipelineParameterObjectsOutputReference <a name="DatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes"></a>

```python
def put_attributes(
  value: IResolvable | typing.List[DatapipelinePipelineParameterObjectsAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```python
attributes: DatapipelinePipelineParameterObjectsAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributesList">DatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.attributesInput"></a>

```python
attributes_input: IResolvable | typing.List[DatapipelinePipelineParameterObjectsAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsAttributes">DatapipelinePipelineParameterObjectsAttributes</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatapipelinePipelineParameterObjects
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterObjects">DatapipelinePipelineParameterObjects</a>

---


### DatapipelinePipelineParameterValuesList <a name="DatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelineParameterValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatapipelinePipelineParameterValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>]

---


### DatapipelinePipelineParameterValuesOutputReference <a name="DatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatapipelinePipelineParameterValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelineParameterValues">DatapipelinePipelineParameterValues</a>

---


### DatapipelinePipelinePipelineObjectsFieldsList <a name="DatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelinePipelineObjectsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatapipelinePipelinePipelineObjectsFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]

---


### DatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue">reset_ref_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_ref_value` <a name="reset_ref_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetRefValue"></a>

```python
def reset_ref_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput">ref_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">ref_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `ref_value_input`<sup>Optional</sup> <a name="ref_value_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValueInput"></a>

```python
ref_value_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `ref_value`<sup>Required</sup> <a name="ref_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```python
ref_value: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatapipelinePipelinePipelineObjectsFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>

---


### DatapipelinePipelinePipelineObjectsList <a name="DatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelinePipelineObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatapipelinePipelinePipelineObjects]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>]

---


### DatapipelinePipelinePipelineObjectsOutputReference <a name="DatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[DatapipelinePipelinePipelineObjectsFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```python
fields: DatapipelinePipelinePipelineObjectsFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFieldsList">DatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[DatapipelinePipelinePipelineObjectsFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsFields">DatapipelinePipelinePipelineObjectsFields</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatapipelinePipelinePipelineObjects
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineObjects">DatapipelinePipelinePipelineObjects</a>

---


### DatapipelinePipelinePipelineTagsList <a name="DatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatapipelinePipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatapipelinePipelinePipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>]

---


### DatapipelinePipelinePipelineTagsOutputReference <a name="DatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datapipeline_pipeline

datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatapipelinePipelinePipelineTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datapipelinePipeline.DatapipelinePipelinePipelineTags">DatapipelinePipelinePipelineTags</a>

---



