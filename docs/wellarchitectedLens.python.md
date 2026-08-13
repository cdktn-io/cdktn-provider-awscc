# `wellarchitectedLens` Submodule <a name="`wellarchitectedLens` Submodule" id="@cdktn/provider-awscc.wellarchitectedLens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedLens <a name="WellarchitectedLens" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens awscc_wellarchitected_lens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLens(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  json_string: str = None,
  lens_version: str = None,
  tags: IResolvable | typing.List[WellarchitectedLensTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.jsonString">json_string</a></code> | <code>str</code> | The JSON representation of a lens. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.lensVersion">lens_version</a></code> | <code>str</code> | The version of the lens. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]</code> | The tags assigned to the lens. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `json_string`<sup>Optional</sup> <a name="json_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.jsonString"></a>

- *Type:* str

The JSON representation of a lens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#json_string WellarchitectedLens#json_string}

---

##### `lens_version`<sup>Optional</sup> <a name="lens_version" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.lensVersion"></a>

- *Type:* str

The version of the lens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#lens_version WellarchitectedLens#lens_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]

The tags assigned to the lens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#tags WellarchitectedLens#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetJsonString">reset_json_string</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetLensVersion">reset_lens_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WellarchitectedLensTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]

---

##### `reset_json_string` <a name="reset_json_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetJsonString"></a>

```python
def reset_json_string() -> None
```

##### `reset_lens_version` <a name="reset_lens_version" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetLensVersion"></a>

```python
def reset_lens_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WellarchitectedLens resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isConstruct"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLens.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isTerraformElement"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLens.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isTerraformResource"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLens.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLens.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WellarchitectedLens resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WellarchitectedLens to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WellarchitectedLens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedLens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensArn">lens_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensId">lens_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList">WellarchitectedLensTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.jsonStringInput">json_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensVersionInput">lens_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.jsonString">json_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensVersion">lens_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lens_arn`<sup>Required</sup> <a name="lens_arn" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensArn"></a>

```python
lens_arn: str
```

- *Type:* str

---

##### `lens_id`<sup>Required</sup> <a name="lens_id" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensId"></a>

```python
lens_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.tags"></a>

```python
tags: WellarchitectedLensTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList">WellarchitectedLensTagsList</a>

---

##### `json_string_input`<sup>Optional</sup> <a name="json_string_input" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.jsonStringInput"></a>

```python
json_string_input: str
```

- *Type:* str

---

##### `lens_version_input`<sup>Optional</sup> <a name="lens_version_input" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensVersionInput"></a>

```python
lens_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WellarchitectedLensTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]

---

##### `json_string`<sup>Required</sup> <a name="json_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.jsonString"></a>

```python
json_string: str
```

- *Type:* str

---

##### `lens_version`<sup>Required</sup> <a name="lens_version" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.lensVersion"></a>

```python
lens_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLens.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedLensConfig <a name="WellarchitectedLensConfig" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLensConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  json_string: str = None,
  lens_version: str = None,
  tags: IResolvable | typing.List[WellarchitectedLensTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.jsonString">json_string</a></code> | <code>str</code> | The JSON representation of a lens. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.lensVersion">lens_version</a></code> | <code>str</code> | The version of the lens. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]</code> | The tags assigned to the lens. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `json_string`<sup>Optional</sup> <a name="json_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.jsonString"></a>

```python
json_string: str
```

- *Type:* str

The JSON representation of a lens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#json_string WellarchitectedLens#json_string}

---

##### `lens_version`<sup>Optional</sup> <a name="lens_version" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.lensVersion"></a>

```python
lens_version: str
```

- *Type:* str

The version of the lens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#lens_version WellarchitectedLens#lens_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WellarchitectedLensTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]

The tags assigned to the lens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#tags WellarchitectedLens#tags}

---

### WellarchitectedLensTags <a name="WellarchitectedLensTags" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLensTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#key WellarchitectedLens#key}. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#value WellarchitectedLens#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#key WellarchitectedLens#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_lens#value WellarchitectedLens#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedLensTagsList <a name="WellarchitectedLensTagsList" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLensTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WellarchitectedLensTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WellarchitectedLensTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>]

---


### WellarchitectedLensTagsOutputReference <a name="WellarchitectedLensTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import wellarchitected_lens

wellarchitectedLens.WellarchitectedLensTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WellarchitectedLensTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wellarchitectedLens.WellarchitectedLensTags">WellarchitectedLensTags</a>

---



