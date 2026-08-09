# `evidentlyProject` Submodule <a name="`evidentlyProject` Submodule" id="@cdktn/provider-awscc.evidentlyProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyProject <a name="EvidentlyProject" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project awscc_evidently_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProject(
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
  app_config_resource: EvidentlyProjectAppConfigResource = None,
  data_delivery: EvidentlyProjectDataDelivery = None,
  description: str = None,
  tags: IResolvable | typing.List[EvidentlyProjectTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#name EvidentlyProject#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.appConfigResource">app_config_resource</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#app_config_resource EvidentlyProject#app_config_resource}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.dataDelivery">data_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | Destinations for data. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#description EvidentlyProject#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#name EvidentlyProject#name}.

---

##### `app_config_resource`<sup>Optional</sup> <a name="app_config_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.appConfigResource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#app_config_resource EvidentlyProject#app_config_resource}.

---

##### `data_delivery`<sup>Optional</sup> <a name="data_delivery" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.dataDelivery"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

Destinations for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#data_delivery EvidentlyProject#data_delivery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#description EvidentlyProject#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#tags EvidentlyProject#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putAppConfigResource">put_app_config_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putDataDelivery">put_data_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetAppConfigResource">reset_app_config_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetDataDelivery">reset_data_delivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_config_resource` <a name="put_app_config_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putAppConfigResource"></a>

```python
def put_app_config_resource(
  application_id: str = None,
  environment_id: str = None
) -> None
```

###### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putAppConfigResource.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#application_id EvidentlyProject#application_id}.

---

###### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putAppConfigResource.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#environment_id EvidentlyProject#environment_id}.

---

##### `put_data_delivery` <a name="put_data_delivery" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putDataDelivery"></a>

```python
def put_data_delivery(
  log_group: str = None,
  s3: EvidentlyProjectDataDeliveryS3 = None
) -> None
```

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putDataDelivery.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#log_group EvidentlyProject#log_group}.

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putDataDelivery.parameter.s3"></a>

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#s3 EvidentlyProject#s3}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EvidentlyProjectTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]

---

##### `reset_app_config_resource` <a name="reset_app_config_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetAppConfigResource"></a>

```python
def reset_app_config_resource() -> None
```

##### `reset_data_delivery` <a name="reset_data_delivery" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetDataDelivery"></a>

```python
def reset_data_delivery() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EvidentlyProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isConstruct"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isTerraformElement"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isTerraformResource"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EvidentlyProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EvidentlyProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EvidentlyProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EvidentlyProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.appConfigResource">app_config_resource</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference">EvidentlyProjectAppConfigResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.dataDelivery">data_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList">EvidentlyProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.appConfigResourceInput">app_config_resource_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.dataDeliveryInput">data_delivery_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_config_resource`<sup>Required</sup> <a name="app_config_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.appConfigResource"></a>

```python
app_config_resource: EvidentlyProjectAppConfigResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference">EvidentlyProjectAppConfigResourceOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_delivery`<sup>Required</sup> <a name="data_delivery" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.dataDelivery"></a>

```python
data_delivery: EvidentlyProjectDataDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference">EvidentlyProjectDataDeliveryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.tags"></a>

```python
tags: EvidentlyProjectTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList">EvidentlyProjectTagsList</a>

---

##### `app_config_resource_input`<sup>Optional</sup> <a name="app_config_resource_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.appConfigResourceInput"></a>

```python
app_config_resource_input: IResolvable | EvidentlyProjectAppConfigResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a>

---

##### `data_delivery_input`<sup>Optional</sup> <a name="data_delivery_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.dataDeliveryInput"></a>

```python
data_delivery_input: IResolvable | EvidentlyProjectDataDelivery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EvidentlyProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyProjectAppConfigResource <a name="EvidentlyProjectAppConfigResource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectAppConfigResource(
  application_id: str = None,
  environment_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#application_id EvidentlyProject#application_id}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#environment_id EvidentlyProject#environment_id}. |

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#application_id EvidentlyProject#application_id}.

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#environment_id EvidentlyProject#environment_id}.

---

### EvidentlyProjectConfig <a name="EvidentlyProjectConfig" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  app_config_resource: EvidentlyProjectAppConfigResource = None,
  data_delivery: EvidentlyProjectDataDelivery = None,
  description: str = None,
  tags: IResolvable | typing.List[EvidentlyProjectTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#name EvidentlyProject#name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.appConfigResource">app_config_resource</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#app_config_resource EvidentlyProject#app_config_resource}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery">data_delivery</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | Destinations for data. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#description EvidentlyProject#description}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#name EvidentlyProject#name}.

---

##### `app_config_resource`<sup>Optional</sup> <a name="app_config_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.appConfigResource"></a>

```python
app_config_resource: EvidentlyProjectAppConfigResource
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#app_config_resource EvidentlyProject#app_config_resource}.

---

##### `data_delivery`<sup>Optional</sup> <a name="data_delivery" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.dataDelivery"></a>

```python
data_delivery: EvidentlyProjectDataDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

Destinations for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#data_delivery EvidentlyProject#data_delivery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#description EvidentlyProject#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EvidentlyProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#tags EvidentlyProject#tags}

---

### EvidentlyProjectDataDelivery <a name="EvidentlyProjectDataDelivery" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectDataDelivery(
  log_group: str = None,
  s3: EvidentlyProjectDataDeliveryS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#log_group EvidentlyProject#log_group}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#s3 EvidentlyProject#s3}. |

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#log_group EvidentlyProject#log_group}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery.property.s3"></a>

```python
s3: EvidentlyProjectDataDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#s3 EvidentlyProject#s3}.

---

### EvidentlyProjectDataDeliveryS3 <a name="EvidentlyProjectDataDeliveryS3" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryS3(
  bucket_name: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#bucket_name EvidentlyProject#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#prefix EvidentlyProject#prefix}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#bucket_name EvidentlyProject#bucket_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#prefix EvidentlyProject#prefix}.

---

### EvidentlyProjectTags <a name="EvidentlyProjectTags" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#key EvidentlyProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#value EvidentlyProject#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyProjectAppConfigResourceOutputReference <a name="EvidentlyProjectAppConfigResourceOutputReference" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_id` <a name="reset_application_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyProjectAppConfigResource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectAppConfigResource">EvidentlyProjectAppConfigResource</a>

---


### EvidentlyProjectDataDeliveryOutputReference <a name="EvidentlyProjectDataDeliveryOutputReference" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3"></a>

```python
def put_s3(
  bucket_name: str = None,
  prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#bucket_name EvidentlyProject#bucket_name}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/evidently_project#prefix EvidentlyProject#prefix}.

---

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference">EvidentlyProjectDataDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Input">s3_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3"></a>

```python
s3: EvidentlyProjectDataDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference">EvidentlyProjectDataDeliveryS3OutputReference</a>

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.s3Input"></a>

```python
s3_input: IResolvable | EvidentlyProjectDataDeliveryS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a>

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyProjectDataDelivery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDelivery">EvidentlyProjectDataDelivery</a>

---


### EvidentlyProjectDataDeliveryS3OutputReference <a name="EvidentlyProjectDataDeliveryS3OutputReference" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyProjectDataDeliveryS3
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectDataDeliveryS3">EvidentlyProjectDataDeliveryS3</a>

---


### EvidentlyProjectTagsList <a name="EvidentlyProjectTagsList" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EvidentlyProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EvidentlyProjectTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>]

---


### EvidentlyProjectTagsOutputReference <a name="EvidentlyProjectTagsOutputReference" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import evidently_project

evidentlyProject.EvidentlyProjectTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EvidentlyProjectTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.evidentlyProject.EvidentlyProjectTags">EvidentlyProjectTags</a>

---



