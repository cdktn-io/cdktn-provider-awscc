# `sagemakerHumanTaskUi` Submodule <a name="`sagemakerHumanTaskUi` Submodule" id="@cdktn/provider-awscc.sagemakerHumanTaskUi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerHumanTaskUi <a name="SagemakerHumanTaskUi" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui awscc_sagemaker_human_task_ui}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  human_task_ui_name: str,
  tags: IResolvable | typing.List[SagemakerHumanTaskUiTags] = None,
  ui_template: SagemakerHumanTaskUiUiTemplate = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.humanTaskUiName">human_task_ui_name</a></code> | <code>str</code> | The name of the human task user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]</code> | An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.uiTemplate">ui_template</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | The Liquid template for the worker user interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `human_task_ui_name`<sup>Required</sup> <a name="human_task_ui_name" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.humanTaskUiName"></a>

- *Type:* str

The name of the human task user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]

An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}

---

##### `ui_template`<sup>Optional</sup> <a name="ui_template" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.Initializer.parameter.uiTemplate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

The Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate">put_ui_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetUiTemplate">reset_ui_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerHumanTaskUiTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]

---

##### `put_ui_template` <a name="put_ui_template" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate"></a>

```python
def put_ui_template(
  content: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.putUiTemplate.parameter.content"></a>

- *Type:* str

The content of the Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_ui_template` <a name="reset_ui_template" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.resetUiTemplate"></a>

```python
def reset_ui_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerHumanTaskUi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerHumanTaskUi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerHumanTaskUi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerHumanTaskUi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerHumanTaskUi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiArn">human_task_ui_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList">SagemakerHumanTaskUiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate">ui_template</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput">human_task_ui_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput">ui_template_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName">human_task_ui_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `human_task_ui_arn`<sup>Required</sup> <a name="human_task_ui_arn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiArn"></a>

```python
human_task_ui_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tags"></a>

```python
tags: SagemakerHumanTaskUiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList">SagemakerHumanTaskUiTagsList</a>

---

##### `ui_template`<sup>Required</sup> <a name="ui_template" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplate"></a>

```python
ui_template: SagemakerHumanTaskUiUiTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference">SagemakerHumanTaskUiUiTemplateOutputReference</a>

---

##### `human_task_ui_name_input`<sup>Optional</sup> <a name="human_task_ui_name_input" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiNameInput"></a>

```python
human_task_ui_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerHumanTaskUiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]

---

##### `ui_template_input`<sup>Optional</sup> <a name="ui_template_input" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.uiTemplateInput"></a>

```python
ui_template_input: IResolvable | SagemakerHumanTaskUiUiTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---

##### `human_task_ui_name`<sup>Required</sup> <a name="human_task_ui_name" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.humanTaskUiName"></a>

```python
human_task_ui_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerHumanTaskUiConfig <a name="SagemakerHumanTaskUiConfig" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  human_task_ui_name: str,
  tags: IResolvable | typing.List[SagemakerHumanTaskUiTags] = None,
  ui_template: SagemakerHumanTaskUiUiTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName">human_task_ui_name</a></code> | <code>str</code> | The name of the human task user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]</code> | An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate">ui_template</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | The Liquid template for the worker user interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `human_task_ui_name`<sup>Required</sup> <a name="human_task_ui_name" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.humanTaskUiName"></a>

```python
human_task_ui_name: str
```

- *Type:* str

The name of the human task user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerHumanTaskUiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]

An array of key-value pairs that contain metadata to help you categorize and organize a human review workflow user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#tags SagemakerHumanTaskUi#tags}

---

##### `ui_template`<sup>Optional</sup> <a name="ui_template" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiConfig.property.uiTemplate"></a>

```python
ui_template: SagemakerHumanTaskUiUiTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

The Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#ui_template SagemakerHumanTaskUi#ui_template}

---

### SagemakerHumanTaskUiTags <a name="SagemakerHumanTaskUiTags" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#key SagemakerHumanTaskUi#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#value SagemakerHumanTaskUi#value}

---

### SagemakerHumanTaskUiUiTemplate <a name="SagemakerHumanTaskUiUiTemplate" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content">content</a></code> | <code>str</code> | The content of the Liquid template for the worker user interface. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the Liquid template for the worker user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sagemaker_human_task_ui#content SagemakerHumanTaskUi#content}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerHumanTaskUiTagsList <a name="SagemakerHumanTaskUiTagsList" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerHumanTaskUiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerHumanTaskUiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>]

---


### SagemakerHumanTaskUiTagsOutputReference <a name="SagemakerHumanTaskUiTagsOutputReference" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerHumanTaskUiTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiTags">SagemakerHumanTaskUiTags</a>

---


### SagemakerHumanTaskUiUiTemplateOutputReference <a name="SagemakerHumanTaskUiUiTemplateOutputReference" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_human_task_ui

sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerHumanTaskUiUiTemplate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerHumanTaskUi.SagemakerHumanTaskUiUiTemplate">SagemakerHumanTaskUiUiTemplate</a>

---



