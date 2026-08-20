# `iotanalyticsPipeline` Submodule <a name="`iotanalyticsPipeline` Submodule" id="@cdktn/provider-awscc.iotanalyticsPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsPipeline <a name="IotanalyticsPipeline" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline awscc_iotanalytics_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipeline(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pipeline_activities: IResolvable | typing.List[IotanalyticsPipelinePipelineActivities],
  pipeline_name: str = None,
  tags: IResolvable | typing.List[IotanalyticsPipelineTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineActivities">pipeline_activities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pipeline_activities`<sup>Required</sup> <a name="pipeline_activities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineActivities"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}.

---

##### `pipeline_name`<sup>Optional</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.pipelineName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putPipelineActivities">put_pipeline_activities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetPipelineName">reset_pipeline_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pipeline_activities` <a name="put_pipeline_activities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putPipelineActivities"></a>

```python
def put_pipeline_activities(
  value: IResolvable | typing.List[IotanalyticsPipelinePipelineActivities]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putPipelineActivities.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotanalyticsPipelineTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]

---

##### `reset_pipeline_name` <a name="reset_pipeline_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetPipelineName"></a>

```python
def reset_pipeline_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotanalyticsPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isConstruct"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipeline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotanalyticsPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotanalyticsPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotanalyticsPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivities">pipeline_activities</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList">IotanalyticsPipelinePipelineActivitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList">IotanalyticsPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivitiesInput">pipeline_activities_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineNameInput">pipeline_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineName">pipeline_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pipeline_activities`<sup>Required</sup> <a name="pipeline_activities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivities"></a>

```python
pipeline_activities: IotanalyticsPipelinePipelineActivitiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList">IotanalyticsPipelinePipelineActivitiesList</a>

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tags"></a>

```python
tags: IotanalyticsPipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList">IotanalyticsPipelineTagsList</a>

---

##### `pipeline_activities_input`<sup>Optional</sup> <a name="pipeline_activities_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineActivitiesInput"></a>

```python
pipeline_activities_input: IResolvable | typing.List[IotanalyticsPipelinePipelineActivities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]

---

##### `pipeline_name_input`<sup>Optional</sup> <a name="pipeline_name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineNameInput"></a>

```python
pipeline_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotanalyticsPipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]

---

##### `pipeline_name`<sup>Required</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsPipelineConfig <a name="IotanalyticsPipelineConfig" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pipeline_activities: IResolvable | typing.List[IotanalyticsPipelinePipelineActivities],
  pipeline_name: str = None,
  tags: IResolvable | typing.List[IotanalyticsPipelineTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineActivities">pipeline_activities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineName">pipeline_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pipeline_activities`<sup>Required</sup> <a name="pipeline_activities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineActivities"></a>

```python
pipeline_activities: IResolvable | typing.List[IotanalyticsPipelinePipelineActivities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_activities IotanalyticsPipeline#pipeline_activities}.

---

##### `pipeline_name`<sup>Optional</sup> <a name="pipeline_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.pipelineName"></a>

```python
pipeline_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#pipeline_name IotanalyticsPipeline#pipeline_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotanalyticsPipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#tags IotanalyticsPipeline#tags}.

---

### IotanalyticsPipelinePipelineActivities <a name="IotanalyticsPipelinePipelineActivities" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities(
  add_attributes: IotanalyticsPipelinePipelineActivitiesAddAttributes = None,
  channel: IotanalyticsPipelinePipelineActivitiesChannel = None,
  datastore: IotanalyticsPipelinePipelineActivitiesDatastore = None,
  device_registry_enrich: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich = None,
  device_shadow_enrich: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich = None,
  filter: IotanalyticsPipelinePipelineActivitiesFilter = None,
  lambda: IotanalyticsPipelinePipelineActivitiesLambda = None,
  math: IotanalyticsPipelinePipelineActivitiesMath = None,
  remove_attributes: IotanalyticsPipelinePipelineActivitiesRemoveAttributes = None,
  select_attributes: IotanalyticsPipelinePipelineActivitiesSelectAttributes = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.addAttributes">add_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#add_attributes IotanalyticsPipeline#add_attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.channel">channel</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#channel IotanalyticsPipeline#channel}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.datastore">datastore</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#datastore IotanalyticsPipeline#datastore}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceRegistryEnrich">device_registry_enrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#device_registry_enrich IotanalyticsPipeline#device_registry_enrich}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceShadowEnrich">device_shadow_enrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#device_shadow_enrich IotanalyticsPipeline#device_shadow_enrich}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#lambda IotanalyticsPipeline#lambda}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.math">math</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.removeAttributes">remove_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#remove_attributes IotanalyticsPipeline#remove_attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.selectAttributes">select_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#select_attributes IotanalyticsPipeline#select_attributes}. |

---

##### `add_attributes`<sup>Optional</sup> <a name="add_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.addAttributes"></a>

```python
add_attributes: IotanalyticsPipelinePipelineActivitiesAddAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#add_attributes IotanalyticsPipeline#add_attributes}.

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.channel"></a>

```python
channel: IotanalyticsPipelinePipelineActivitiesChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#channel IotanalyticsPipeline#channel}.

---

##### `datastore`<sup>Optional</sup> <a name="datastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.datastore"></a>

```python
datastore: IotanalyticsPipelinePipelineActivitiesDatastore
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#datastore IotanalyticsPipeline#datastore}.

---

##### `device_registry_enrich`<sup>Optional</sup> <a name="device_registry_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceRegistryEnrich"></a>

```python
device_registry_enrich: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#device_registry_enrich IotanalyticsPipeline#device_registry_enrich}.

---

##### `device_shadow_enrich`<sup>Optional</sup> <a name="device_shadow_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.deviceShadowEnrich"></a>

```python
device_shadow_enrich: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#device_shadow_enrich IotanalyticsPipeline#device_shadow_enrich}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.filter"></a>

```python
filter: IotanalyticsPipelinePipelineActivitiesFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}.

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.lambda"></a>

```python
lambda: IotanalyticsPipelinePipelineActivitiesLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#lambda IotanalyticsPipeline#lambda}.

---

##### `math`<sup>Optional</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.math"></a>

```python
math: IotanalyticsPipelinePipelineActivitiesMath
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}.

---

##### `remove_attributes`<sup>Optional</sup> <a name="remove_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.removeAttributes"></a>

```python
remove_attributes: IotanalyticsPipelinePipelineActivitiesRemoveAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#remove_attributes IotanalyticsPipeline#remove_attributes}.

---

##### `select_attributes`<sup>Optional</sup> <a name="select_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities.property.selectAttributes"></a>

```python
select_attributes: IotanalyticsPipelinePipelineActivitiesSelectAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#select_attributes IotanalyticsPipeline#select_attributes}.

---

### IotanalyticsPipelinePipelineActivitiesAddAttributes <a name="IotanalyticsPipelinePipelineActivitiesAddAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes(
  attributes: typing.Mapping[str] = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesChannel <a name="IotanalyticsPipelinePipelineActivitiesChannel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel(
  channel_name: str = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.channelName">channel_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#channel_name IotanalyticsPipeline#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#channel_name IotanalyticsPipeline#channel_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesDatastore <a name="IotanalyticsPipelinePipelineActivitiesDatastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore(
  datastore_name: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.datastoreName">datastore_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#datastore_name IotanalyticsPipeline#datastore_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |

---

##### `datastore_name`<sup>Optional</sup> <a name="datastore_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#datastore_name IotanalyticsPipeline#datastore_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

### IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich <a name="IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich(
  attribute: str = None,
  name: str = None,
  next: str = None,
  role_arn: str = None,
  thing_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.thingName">thing_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}.

---

##### `thing_name`<sup>Optional</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}.

---

### IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich <a name="IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich(
  attribute: str = None,
  name: str = None,
  next: str = None,
  role_arn: str = None,
  thing_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.thingName">thing_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}.

---

##### `thing_name`<sup>Optional</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}.

---

### IotanalyticsPipelinePipelineActivitiesFilter <a name="IotanalyticsPipelinePipelineActivitiesFilter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter(
  filter: str = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesLambda <a name="IotanalyticsPipelinePipelineActivitiesLambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda(
  batch_size: typing.Union[int, float] = None,
  lambda_name: str = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#batch_size IotanalyticsPipeline#batch_size}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.lambdaName">lambda_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#lambda_name IotanalyticsPipeline#lambda_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#batch_size IotanalyticsPipeline#batch_size}.

---

##### `lambda_name`<sup>Optional</sup> <a name="lambda_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.lambdaName"></a>

```python
lambda_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#lambda_name IotanalyticsPipeline#lambda_name}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesMath <a name="IotanalyticsPipelinePipelineActivitiesMath" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath(
  attribute: str = None,
  math: str = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.math">math</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

##### `math`<sup>Optional</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.math"></a>

```python
math: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesRemoveAttributes <a name="IotanalyticsPipelinePipelineActivitiesRemoveAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes(
  attributes: typing.List[str] = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelinePipelineActivitiesSelectAttributes <a name="IotanalyticsPipelinePipelineActivitiesSelectAttributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes(
  attributes: typing.List[str] = None,
  name: str = None,
  next: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.next">next</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes.property.next"></a>

```python
next: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

### IotanalyticsPipelineTags <a name="IotanalyticsPipelineTags" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelineTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#key IotanalyticsPipeline#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#value IotanalyticsPipeline#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#key IotanalyticsPipeline#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#value IotanalyticsPipeline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesAddAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---


### IotanalyticsPipelinePipelineActivitiesChannelOutputReference <a name="IotanalyticsPipelinePipelineActivitiesChannelOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetChannelName">reset_channel_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetChannelName"></a>

```python
def reset_channel_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

---


### IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference <a name="IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetDatastoreName">reset_datastore_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datastore_name` <a name="reset_datastore_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetDatastoreName"></a>

```python
def reset_datastore_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreNameInput">datastore_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName">datastore_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datastore_name_input`<sup>Optional</sup> <a name="datastore_name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreNameInput"></a>

```python
datastore_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `datastore_name`<sup>Required</sup> <a name="datastore_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName"></a>

```python
datastore_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesDatastore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

---


### IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference <a name="IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetNext">reset_next</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetThingName">reset_thing_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetNext"></a>

```python
def reset_next() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_thing_name` <a name="reset_thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resetThingName"></a>

```python
def reset_thing_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingNameInput">thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `thing_name_input`<sup>Optional</sup> <a name="thing_name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingNameInput"></a>

```python
thing_name_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---


### IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference <a name="IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetNext">reset_next</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetThingName">reset_thing_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetNext"></a>

```python
def reset_next() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_thing_name` <a name="reset_thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resetThingName"></a>

```python
def reset_thing_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingNameInput">thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `thing_name_input`<sup>Optional</sup> <a name="thing_name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingNameInput"></a>

```python
thing_name_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---


### IotanalyticsPipelinePipelineActivitiesFilterOutputReference <a name="IotanalyticsPipelinePipelineActivitiesFilterOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

---


### IotanalyticsPipelinePipelineActivitiesLambdaOutputReference <a name="IotanalyticsPipelinePipelineActivitiesLambdaOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetLambdaName">reset_lambda_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_size` <a name="reset_batch_size" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_lambda_name` <a name="reset_lambda_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetLambdaName"></a>

```python
def reset_lambda_name() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaNameInput">lambda_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName">lambda_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lambda_name_input`<sup>Optional</sup> <a name="lambda_name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaNameInput"></a>

```python
lambda_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lambda_name`<sup>Required</sup> <a name="lambda_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName"></a>

```python
lambda_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

---


### IotanalyticsPipelinePipelineActivitiesList <a name="IotanalyticsPipelinePipelineActivitiesList" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsPipelinePipelineActivitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsPipelinePipelineActivities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>]

---


### IotanalyticsPipelinePipelineActivitiesMathOutputReference <a name="IotanalyticsPipelinePipelineActivitiesMathOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetMath">reset_math</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_math` <a name="reset_math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetMath"></a>

```python
def reset_math() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.mathInput">math_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math">math</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `math_input`<sup>Optional</sup> <a name="math_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.mathInput"></a>

```python
math_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `math`<sup>Required</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math"></a>

```python
math: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesMath
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

---


### IotanalyticsPipelinePipelineActivitiesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes">put_add_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel">put_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore">put_datastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich">put_device_registry_enrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich">put_device_shadow_enrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda">put_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath">put_math</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes">put_remove_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes">put_select_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetAddAttributes">reset_add_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDatastore">reset_datastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceRegistryEnrich">reset_device_registry_enrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceShadowEnrich">reset_device_shadow_enrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetLambda">reset_lambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetMath">reset_math</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetRemoveAttributes">reset_remove_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetSelectAttributes">reset_select_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_add_attributes` <a name="put_add_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes"></a>

```python
def put_add_attributes(
  attributes: typing.Mapping[str] = None,
  name: str = None,
  next: str = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putAddAttributes.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `put_channel` <a name="put_channel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel"></a>

```python
def put_channel(
  channel_name: str = None,
  name: str = None,
  next: str = None
) -> None
```

###### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel.parameter.channelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#channel_name IotanalyticsPipeline#channel_name}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putChannel.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `put_datastore` <a name="put_datastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore"></a>

```python
def put_datastore(
  datastore_name: str = None,
  name: str = None
) -> None
```

###### `datastore_name`<sup>Optional</sup> <a name="datastore_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore.parameter.datastoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#datastore_name IotanalyticsPipeline#datastore_name}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDatastore.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

##### `put_device_registry_enrich` <a name="put_device_registry_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich"></a>

```python
def put_device_registry_enrich(
  attribute: str = None,
  name: str = None,
  next: str = None,
  role_arn: str = None,
  thing_name: str = None
) -> None
```

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}.

---

###### `thing_name`<sup>Optional</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceRegistryEnrich.parameter.thingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}.

---

##### `put_device_shadow_enrich` <a name="put_device_shadow_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich"></a>

```python
def put_device_shadow_enrich(
  attribute: str = None,
  name: str = None,
  next: str = None,
  role_arn: str = None,
  thing_name: str = None
) -> None
```

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#role_arn IotanalyticsPipeline#role_arn}.

---

###### `thing_name`<sup>Optional</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putDeviceShadowEnrich.parameter.thingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#thing_name IotanalyticsPipeline#thing_name}.

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter"></a>

```python
def put_filter(
  filter: str = None,
  name: str = None,
  next: str = None
) -> None
```

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#filter IotanalyticsPipeline#filter}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putFilter.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `put_lambda` <a name="put_lambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda"></a>

```python
def put_lambda(
  batch_size: typing.Union[int, float] = None,
  lambda_name: str = None,
  name: str = None,
  next: str = None
) -> None
```

###### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#batch_size IotanalyticsPipeline#batch_size}.

---

###### `lambda_name`<sup>Optional</sup> <a name="lambda_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda.parameter.lambdaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#lambda_name IotanalyticsPipeline#lambda_name}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putLambda.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `put_math` <a name="put_math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath"></a>

```python
def put_math(
  attribute: str = None,
  math: str = None,
  name: str = None,
  next: str = None
) -> None
```

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attribute IotanalyticsPipeline#attribute}.

---

###### `math`<sup>Optional</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath.parameter.math"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#math IotanalyticsPipeline#math}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putMath.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `put_remove_attributes` <a name="put_remove_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes"></a>

```python
def put_remove_attributes(
  attributes: typing.List[str] = None,
  name: str = None,
  next: str = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes.parameter.attributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putRemoveAttributes.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `put_select_attributes` <a name="put_select_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes"></a>

```python
def put_select_attributes(
  attributes: typing.List[str] = None,
  name: str = None,
  next: str = None
) -> None
```

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes.parameter.attributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#attributes IotanalyticsPipeline#attributes}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#name IotanalyticsPipeline#name}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.putSelectAttributes.parameter.next"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_pipeline#next IotanalyticsPipeline#next}.

---

##### `reset_add_attributes` <a name="reset_add_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetAddAttributes"></a>

```python
def reset_add_attributes() -> None
```

##### `reset_channel` <a name="reset_channel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_datastore` <a name="reset_datastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDatastore"></a>

```python
def reset_datastore() -> None
```

##### `reset_device_registry_enrich` <a name="reset_device_registry_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceRegistryEnrich"></a>

```python
def reset_device_registry_enrich() -> None
```

##### `reset_device_shadow_enrich` <a name="reset_device_shadow_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetDeviceShadowEnrich"></a>

```python
def reset_device_shadow_enrich() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_lambda` <a name="reset_lambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetLambda"></a>

```python
def reset_lambda() -> None
```

##### `reset_math` <a name="reset_math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetMath"></a>

```python
def reset_math() -> None
```

##### `reset_remove_attributes` <a name="reset_remove_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetRemoveAttributes"></a>

```python
def reset_remove_attributes() -> None
```

##### `reset_select_attributes` <a name="reset_select_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.resetSelectAttributes"></a>

```python
def reset_select_attributes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes">add_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channel">channel</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference">IotanalyticsPipelinePipelineActivitiesChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore">datastore</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich">device_registry_enrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich">device_shadow_enrich</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference">IotanalyticsPipelinePipelineActivitiesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference">IotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.math">math</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference">IotanalyticsPipelinePipelineActivitiesMathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes">remove_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes">select_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributesInput">add_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channelInput">channel_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastoreInput">datastore_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrichInput">device_registry_enrich_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrichInput">device_shadow_enrich_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambdaInput">lambda_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.mathInput">math_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributesInput">remove_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributesInput">select_attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_attributes`<sup>Required</sup> <a name="add_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes"></a>

```python
add_attributes: IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channel"></a>

```python
channel: IotanalyticsPipelinePipelineActivitiesChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannelOutputReference">IotanalyticsPipelinePipelineActivitiesChannelOutputReference</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore"></a>

```python
datastore: IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">IotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a>

---

##### `device_registry_enrich`<sup>Required</sup> <a name="device_registry_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich"></a>

```python
device_registry_enrich: IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a>

---

##### `device_shadow_enrich`<sup>Required</sup> <a name="device_shadow_enrich" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich"></a>

```python
device_shadow_enrich: IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filter"></a>

```python
filter: IotanalyticsPipelinePipelineActivitiesFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilterOutputReference">IotanalyticsPipelinePipelineActivitiesFilterOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda"></a>

```python
lambda: IotanalyticsPipelinePipelineActivitiesLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambdaOutputReference">IotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a>

---

##### `math`<sup>Required</sup> <a name="math" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.math"></a>

```python
math: IotanalyticsPipelinePipelineActivitiesMathOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMathOutputReference">IotanalyticsPipelinePipelineActivitiesMathOutputReference</a>

---

##### `remove_attributes`<sup>Required</sup> <a name="remove_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes"></a>

```python
remove_attributes: IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a>

---

##### `select_attributes`<sup>Required</sup> <a name="select_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes"></a>

```python
select_attributes: IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a>

---

##### `add_attributes_input`<sup>Optional</sup> <a name="add_attributes_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributesInput"></a>

```python
add_attributes_input: IResolvable | IotanalyticsPipelinePipelineActivitiesAddAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesAddAttributes">IotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.channelInput"></a>

```python
channel_input: IResolvable | IotanalyticsPipelinePipelineActivitiesChannel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesChannel">IotanalyticsPipelinePipelineActivitiesChannel</a>

---

##### `datastore_input`<sup>Optional</sup> <a name="datastore_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.datastoreInput"></a>

```python
datastore_input: IResolvable | IotanalyticsPipelinePipelineActivitiesDatastore
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDatastore">IotanalyticsPipelinePipelineActivitiesDatastore</a>

---

##### `device_registry_enrich_input`<sup>Optional</sup> <a name="device_registry_enrich_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrichInput"></a>

```python
device_registry_enrich_input: IResolvable | IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">IotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---

##### `device_shadow_enrich_input`<sup>Optional</sup> <a name="device_shadow_enrich_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrichInput"></a>

```python
device_shadow_enrich_input: IResolvable | IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">IotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | IotanalyticsPipelinePipelineActivitiesFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesFilter">IotanalyticsPipelinePipelineActivitiesFilter</a>

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.lambdaInput"></a>

```python
lambda_input: IResolvable | IotanalyticsPipelinePipelineActivitiesLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesLambda">IotanalyticsPipelinePipelineActivitiesLambda</a>

---

##### `math_input`<sup>Optional</sup> <a name="math_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.mathInput"></a>

```python
math_input: IResolvable | IotanalyticsPipelinePipelineActivitiesMath
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesMath">IotanalyticsPipelinePipelineActivitiesMath</a>

---

##### `remove_attributes_input`<sup>Optional</sup> <a name="remove_attributes_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributesInput"></a>

```python
remove_attributes_input: IResolvable | IotanalyticsPipelinePipelineActivitiesRemoveAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---

##### `select_attributes_input`<sup>Optional</sup> <a name="select_attributes_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributesInput"></a>

```python
select_attributes_input: IResolvable | IotanalyticsPipelinePipelineActivitiesSelectAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivities">IotanalyticsPipelinePipelineActivities</a>

---


### IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesRemoveAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesRemoveAttributes">IotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---


### IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference <a name="IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetNext">reset_next</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resetNext"></a>

```python
def reset_next() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nextInput">next_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next">next</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.nextInput"></a>

```python
next_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next"></a>

```python
next: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelinePipelineActivitiesSelectAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelinePipelineActivitiesSelectAttributes">IotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---


### IotanalyticsPipelineTagsList <a name="IotanalyticsPipelineTagsList" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotanalyticsPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotanalyticsPipelineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>]

---


### IotanalyticsPipelineTagsOutputReference <a name="IotanalyticsPipelineTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotanalytics_pipeline

iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotanalyticsPipelineTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsPipeline.IotanalyticsPipelineTags">IotanalyticsPipelineTags</a>

---



