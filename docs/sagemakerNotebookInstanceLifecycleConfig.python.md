# `sagemakerNotebookInstanceLifecycleConfig` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfig` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfig <a name="SagemakerNotebookInstanceLifecycleConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config awscc_sagemaker_notebook_instance_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  notebook_instance_lifecycle_config_name: str = None,
  on_create: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnCreate] = None,
  on_start: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnStart] = None,
  tags: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.notebookInstanceLifecycleConfigName">notebook_instance_lifecycle_config_name</a></code> | <code>str</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onCreate">on_create</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]</code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onStart">on_start</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]</code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `notebook_instance_lifecycle_config_name`<sup>Optional</sup> <a name="notebook_instance_lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.notebookInstanceLifecycleConfigName"></a>

- *Type:* str

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `on_create`<sup>Optional</sup> <a name="on_create" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onCreate"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `on_start`<sup>Optional</sup> <a name="on_start" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.onStart"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate">put_on_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart">put_on_start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName">reset_notebook_instance_lifecycle_config_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate">reset_on_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart">reset_on_start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_on_create` <a name="put_on_create" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate"></a>

```python
def put_on_create(
  value: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnCreate]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnCreate.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]

---

##### `put_on_start` <a name="put_on_start" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart"></a>

```python
def put_on_start(
  value: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnStart]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putOnStart.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]

---

##### `reset_notebook_instance_lifecycle_config_name` <a name="reset_notebook_instance_lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetNotebookInstanceLifecycleConfigName"></a>

```python
def reset_notebook_instance_lifecycle_config_name() -> None
```

##### `reset_on_create` <a name="reset_on_create" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnCreate"></a>

```python
def reset_on_create() -> None
```

##### `reset_on_start` <a name="reset_on_start" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetOnStart"></a>

```python
def reset_on_start() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerNotebookInstanceLifecycleConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerNotebookInstanceLifecycleConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn">notebook_instance_lifecycle_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate">on_create</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart">on_start</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput">notebook_instance_lifecycle_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput">on_create_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput">on_start_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName">notebook_instance_lifecycle_config_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notebook_instance_lifecycle_config_arn`<sup>Required</sup> <a name="notebook_instance_lifecycle_config_arn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigArn"></a>

```python
notebook_instance_lifecycle_config_arn: str
```

- *Type:* str

---

##### `on_create`<sup>Required</sup> <a name="on_create" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreate"></a>

```python
on_create: SagemakerNotebookInstanceLifecycleConfigOnCreateList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList">SagemakerNotebookInstanceLifecycleConfigOnCreateList</a>

---

##### `on_start`<sup>Required</sup> <a name="on_start" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStart"></a>

```python
on_start: SagemakerNotebookInstanceLifecycleConfigOnStartList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList">SagemakerNotebookInstanceLifecycleConfigOnStartList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tags"></a>

```python
tags: SagemakerNotebookInstanceLifecycleConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList">SagemakerNotebookInstanceLifecycleConfigTagsList</a>

---

##### `notebook_instance_lifecycle_config_name_input`<sup>Optional</sup> <a name="notebook_instance_lifecycle_config_name_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigNameInput"></a>

```python
notebook_instance_lifecycle_config_name_input: str
```

- *Type:* str

---

##### `on_create_input`<sup>Optional</sup> <a name="on_create_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onCreateInput"></a>

```python
on_create_input: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnCreate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]

---

##### `on_start_input`<sup>Optional</sup> <a name="on_start_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.onStartInput"></a>

```python
on_start_input: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnStart]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]

---

##### `notebook_instance_lifecycle_config_name`<sup>Required</sup> <a name="notebook_instance_lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.notebookInstanceLifecycleConfigName"></a>

```python
notebook_instance_lifecycle_config_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigConfig <a name="SagemakerNotebookInstanceLifecycleConfigConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  notebook_instance_lifecycle_config_name: str = None,
  on_create: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnCreate] = None,
  on_start: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnStart] = None,
  tags: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName">notebook_instance_lifecycle_config_name</a></code> | <code>str</code> | The name of the lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate">on_create</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]</code> | A shell script that runs only once, when you create a notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart">on_start</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]</code> | A shell script that runs every time you start a notebook instance, including when you create the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `notebook_instance_lifecycle_config_name`<sup>Optional</sup> <a name="notebook_instance_lifecycle_config_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.notebookInstanceLifecycleConfigName"></a>

```python
notebook_instance_lifecycle_config_name: str
```

- *Type:* str

The name of the lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#notebook_instance_lifecycle_config_name SagemakerNotebookInstanceLifecycleConfig#notebook_instance_lifecycle_config_name}

---

##### `on_create`<sup>Optional</sup> <a name="on_create" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onCreate"></a>

```python
on_create: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnCreate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]

A shell script that runs only once, when you create a notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_create SagemakerNotebookInstanceLifecycleConfig#on_create}

---

##### `on_start`<sup>Optional</sup> <a name="on_start" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.onStart"></a>

```python
on_start: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnStart]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]

A shell script that runs every time you start a notebook instance, including when you create the notebook instance.

The shell script must be a base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#on_start SagemakerNotebookInstanceLifecycleConfig#on_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#tags SagemakerNotebookInstanceLifecycleConfig#tags}

---

### SagemakerNotebookInstanceLifecycleConfigOnCreate <a name="SagemakerNotebookInstanceLifecycleConfigOnCreate" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigOnStart <a name="SagemakerNotebookInstanceLifecycleConfigOnStart" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart(
  content: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#content SagemakerNotebookInstanceLifecycleConfig#content}.

---

### SagemakerNotebookInstanceLifecycleConfigTags <a name="SagemakerNotebookInstanceLifecycleConfigTags" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#key SagemakerNotebookInstanceLifecycleConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance_lifecycle_config#value SagemakerNotebookInstanceLifecycleConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceLifecycleConfigOnCreateList <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnCreate]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>]

---


### SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnCreate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnCreate">SagemakerNotebookInstanceLifecycleConfigOnCreate</a>

---


### SagemakerNotebookInstanceLifecycleConfigOnStartList <a name="SagemakerNotebookInstanceLifecycleConfigOnStartList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigOnStart]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>]

---


### SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent">reset_content</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.resetContent"></a>

```python
def reset_content() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStartOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerNotebookInstanceLifecycleConfigOnStart
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigOnStart">SagemakerNotebookInstanceLifecycleConfigOnStart</a>

---


### SagemakerNotebookInstanceLifecycleConfigTagsList <a name="SagemakerNotebookInstanceLifecycleConfigTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerNotebookInstanceLifecycleConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerNotebookInstanceLifecycleConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>]

---


### SagemakerNotebookInstanceLifecycleConfigTagsOutputReference <a name="SagemakerNotebookInstanceLifecycleConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_notebook_instance_lifecycle_config

sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerNotebookInstanceLifecycleConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerNotebookInstanceLifecycleConfig.SagemakerNotebookInstanceLifecycleConfigTags">SagemakerNotebookInstanceLifecycleConfigTags</a>

---



