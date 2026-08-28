# `s3StorageLensGroup` Submodule <a name="`s3StorageLensGroup` Submodule" id="@cdktn/provider-awscc.s3StorageLensGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3StorageLensGroup <a name="S3StorageLensGroup" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: S3StorageLensGroupFilter,
  name: str,
  tags: IResolvable | typing.List[S3StorageLensGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | Sets the Storage Lens Group filter. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | The name that identifies the Amazon S3 Storage Lens Group. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]</code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

Sets the Storage Lens Group filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#filter S3StorageLensGroup#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.name"></a>

- *Type:* str

The name that identifies the Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#name S3StorageLensGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]

A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#tags S3StorageLensGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter"></a>

```python
def put_filter(
  and: S3StorageLensGroupFilterAnd = None,
  match_any_prefix: typing.List[str] = None,
  match_any_suffix: typing.List[str] = None,
  match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterMatchAnyTag] = None,
  match_object_age: S3StorageLensGroupFilterMatchObjectAge = None,
  match_object_size: S3StorageLensGroupFilterMatchObjectSize = None,
  or: S3StorageLensGroupFilterOr = None
) -> None
```

###### `and`<sup>Optional</sup> <a name="and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.and"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

The Storage Lens group will include objects that match all of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#and S3StorageLensGroup#and}

---

###### `match_any_prefix`<sup>Optional</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.matchAnyPrefix"></a>

- *Type:* typing.List[str]

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

###### `match_any_suffix`<sup>Optional</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.matchAnySuffix"></a>

- *Type:* typing.List[str]

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

###### `match_any_tag`<sup>Optional</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.matchAnyTag"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

###### `match_object_age`<sup>Optional</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.matchObjectAge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

###### `match_object_size`<sup>Optional</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.matchObjectSize"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

###### `or`<sup>Optional</sup> <a name="or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.or"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

The Storage Lens group will include objects that match any of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#or S3StorageLensGroup#or}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[S3StorageLensGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3StorageLensGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3StorageLensGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3StorageLensGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference">S3StorageLensGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.storageLensGroupArn">storage_lens_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList">S3StorageLensGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filter"></a>

```python
filter: S3StorageLensGroupFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference">S3StorageLensGroupFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_lens_group_arn`<sup>Required</sup> <a name="storage_lens_group_arn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.storageLensGroupArn"></a>

```python
storage_lens_group_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tags"></a>

```python
tags: S3StorageLensGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList">S3StorageLensGroupTagsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filterInput"></a>

```python
filter_input: IResolvable | S3StorageLensGroupFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[S3StorageLensGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3StorageLensGroupConfig <a name="S3StorageLensGroupConfig" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: S3StorageLensGroupFilter,
  name: str,
  tags: IResolvable | typing.List[S3StorageLensGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | Sets the Storage Lens Group filter. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.name">name</a></code> | <code>str</code> | The name that identifies the Amazon S3 Storage Lens Group. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]</code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.filter"></a>

```python
filter: S3StorageLensGroupFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

Sets the Storage Lens Group filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#filter S3StorageLensGroup#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name that identifies the Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#name S3StorageLensGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[S3StorageLensGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]

A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#tags S3StorageLensGroup#tags}

---

### S3StorageLensGroupFilter <a name="S3StorageLensGroupFilter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilter(
  and: S3StorageLensGroupFilterAnd = None,
  match_any_prefix: typing.List[str] = None,
  match_any_suffix: typing.List[str] = None,
  match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterMatchAnyTag] = None,
  match_object_age: S3StorageLensGroupFilterMatchObjectAge = None,
  match_object_size: S3StorageLensGroupFilterMatchObjectSize = None,
  or: S3StorageLensGroupFilterOr = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.and">and</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | The Storage Lens group will include objects that match all of the specified filter values. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyTag">match_any_tag</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]</code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.or">or</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | The Storage Lens group will include objects that match any of the specified filter values. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.and"></a>

```python
and: S3StorageLensGroupFilterAnd
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

The Storage Lens group will include objects that match all of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#and S3StorageLensGroup#and}

---

##### `match_any_prefix`<sup>Optional</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `match_any_suffix`<sup>Optional</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `match_any_tag`<sup>Optional</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyTag"></a>

```python
match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `match_object_age`<sup>Optional</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectAge"></a>

```python
match_object_age: S3StorageLensGroupFilterMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `match_object_size`<sup>Optional</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectSize"></a>

```python
match_object_size: S3StorageLensGroupFilterMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.or"></a>

```python
or: S3StorageLensGroupFilterOr
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

The Storage Lens group will include objects that match any of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#or S3StorageLensGroup#or}

---

### S3StorageLensGroupFilterAnd <a name="S3StorageLensGroupFilterAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAnd(
  match_any_prefix: typing.List[str] = None,
  match_any_suffix: typing.List[str] = None,
  match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterAndMatchAnyTag] = None,
  match_object_age: S3StorageLensGroupFilterAndMatchObjectAge = None,
  match_object_size: S3StorageLensGroupFilterAndMatchObjectSize = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyTag">match_any_tag</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]</code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |

---

##### `match_any_prefix`<sup>Optional</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `match_any_suffix`<sup>Optional</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `match_any_tag`<sup>Optional</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyTag"></a>

```python
match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterAndMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `match_object_age`<sup>Optional</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectAge"></a>

```python
match_object_age: S3StorageLensGroupFilterAndMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `match_object_size`<sup>Optional</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectSize"></a>

```python
match_object_size: S3StorageLensGroupFilterAndMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

### S3StorageLensGroupFilterAndMatchAnyTag <a name="S3StorageLensGroupFilterAndMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterAndMatchObjectAge <a name="S3StorageLensGroupFilterAndMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge(
  days_greater_than: typing.Union[int, float] = None,
  days_less_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum object age to which the rule applies. |

---

##### `days_greater_than`<sup>Optional</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `days_less_than`<sup>Optional</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterAndMatchObjectSize <a name="S3StorageLensGroupFilterAndMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize(
  bytes_greater_than: typing.Union[int, float] = None,
  bytes_less_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum object size to which the rule applies. |

---

##### `bytes_greater_than`<sup>Optional</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `bytes_less_than`<sup>Optional</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupFilterMatchAnyTag <a name="S3StorageLensGroupFilterMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterMatchObjectAge <a name="S3StorageLensGroupFilterMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge(
  days_greater_than: typing.Union[int, float] = None,
  days_less_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum object age to which the rule applies. |

---

##### `days_greater_than`<sup>Optional</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `days_less_than`<sup>Optional</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterMatchObjectSize <a name="S3StorageLensGroupFilterMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize(
  bytes_greater_than: typing.Union[int, float] = None,
  bytes_less_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum object size to which the rule applies. |

---

##### `bytes_greater_than`<sup>Optional</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `bytes_less_than`<sup>Optional</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupFilterOr <a name="S3StorageLensGroupFilterOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOr(
  match_any_prefix: typing.List[str] = None,
  match_any_suffix: typing.List[str] = None,
  match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterOrMatchAnyTag] = None,
  match_object_age: S3StorageLensGroupFilterOrMatchObjectAge = None,
  match_object_size: S3StorageLensGroupFilterOrMatchObjectSize = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyTag">match_any_tag</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]</code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |

---

##### `match_any_prefix`<sup>Optional</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `match_any_suffix`<sup>Optional</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `match_any_tag`<sup>Optional</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyTag"></a>

```python
match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterOrMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `match_object_age`<sup>Optional</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectAge"></a>

```python
match_object_age: S3StorageLensGroupFilterOrMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `match_object_size`<sup>Optional</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectSize"></a>

```python
match_object_size: S3StorageLensGroupFilterOrMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

### S3StorageLensGroupFilterOrMatchAnyTag <a name="S3StorageLensGroupFilterOrMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterOrMatchObjectAge <a name="S3StorageLensGroupFilterOrMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge(
  days_greater_than: typing.Union[int, float] = None,
  days_less_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum object age to which the rule applies. |

---

##### `days_greater_than`<sup>Optional</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `days_less_than`<sup>Optional</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterOrMatchObjectSize <a name="S3StorageLensGroupFilterOrMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize(
  bytes_greater_than: typing.Union[int, float] = None,
  bytes_less_than: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | Maximum object size to which the rule applies. |

---

##### `bytes_greater_than`<sup>Optional</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `bytes_less_than`<sup>Optional</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupTags <a name="S3StorageLensGroupTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3StorageLensGroupFilterAndMatchAnyTagList <a name="S3StorageLensGroupFilterAndMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3StorageLensGroupFilterAndMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]

---


### S3StorageLensGroupFilterAndMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterAndMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterAndMatchAnyTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>

---


### S3StorageLensGroupFilterAndMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterAndMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysGreaterThan">reset_days_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysLessThan">reset_days_less_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_greater_than` <a name="reset_days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```python
def reset_days_greater_than() -> None
```

##### `reset_days_less_than` <a name="reset_days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```python
def reset_days_less_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThanInput">days_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThanInput">days_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_greater_than_input`<sup>Optional</sup> <a name="days_greater_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```python
days_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than_input`<sup>Optional</sup> <a name="days_less_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```python
days_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_greater_than`<sup>Required</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than`<sup>Required</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterAndMatchObjectAge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

---


### S3StorageLensGroupFilterAndMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterAndMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesGreaterThan">reset_bytes_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesLessThan">reset_bytes_less_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bytes_greater_than` <a name="reset_bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```python
def reset_bytes_greater_than() -> None
```

##### `reset_bytes_less_than` <a name="reset_bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```python
def reset_bytes_less_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThanInput">bytes_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThanInput">bytes_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_greater_than_input`<sup>Optional</sup> <a name="bytes_greater_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```python
bytes_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than_input`<sup>Optional</sup> <a name="bytes_less_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```python
bytes_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_greater_than`<sup>Required</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than`<sup>Required</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterAndMatchObjectSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

---


### S3StorageLensGroupFilterAndOutputReference <a name="S3StorageLensGroupFilterAndOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag">put_match_any_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge">put_match_object_age</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize">put_match_object_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyPrefix">reset_match_any_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnySuffix">reset_match_any_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyTag">reset_match_any_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectAge">reset_match_object_age</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectSize">reset_match_object_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_any_tag` <a name="put_match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag"></a>

```python
def put_match_any_tag(
  value: IResolvable | typing.List[S3StorageLensGroupFilterAndMatchAnyTag]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]

---

##### `put_match_object_age` <a name="put_match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge"></a>

```python
def put_match_object_age(
  days_greater_than: typing.Union[int, float] = None,
  days_less_than: typing.Union[int, float] = None
) -> None
```

###### `days_greater_than`<sup>Optional</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge.parameter.daysGreaterThan"></a>

- *Type:* typing.Union[int, float]

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

###### `days_less_than`<sup>Optional</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge.parameter.daysLessThan"></a>

- *Type:* typing.Union[int, float]

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

##### `put_match_object_size` <a name="put_match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize"></a>

```python
def put_match_object_size(
  bytes_greater_than: typing.Union[int, float] = None,
  bytes_less_than: typing.Union[int, float] = None
) -> None
```

###### `bytes_greater_than`<sup>Optional</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize.parameter.bytesGreaterThan"></a>

- *Type:* typing.Union[int, float]

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

###### `bytes_less_than`<sup>Optional</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize.parameter.bytesLessThan"></a>

- *Type:* typing.Union[int, float]

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

##### `reset_match_any_prefix` <a name="reset_match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyPrefix"></a>

```python
def reset_match_any_prefix() -> None
```

##### `reset_match_any_suffix` <a name="reset_match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnySuffix"></a>

```python
def reset_match_any_suffix() -> None
```

##### `reset_match_any_tag` <a name="reset_match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyTag"></a>

```python
def reset_match_any_tag() -> None
```

##### `reset_match_object_age` <a name="reset_match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectAge"></a>

```python
def reset_match_object_age() -> None
```

##### `reset_match_object_size` <a name="reset_match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectSize"></a>

```python
def reset_match_object_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTag">match_any_tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList">S3StorageLensGroupFilterAndMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference">S3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference">S3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefixInput">match_any_prefix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffixInput">match_any_suffix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTagInput">match_any_tag_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAgeInput">match_object_age_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSizeInput">match_object_size_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_any_tag`<sup>Required</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTag"></a>

```python
match_any_tag: S3StorageLensGroupFilterAndMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList">S3StorageLensGroupFilterAndMatchAnyTagList</a>

---

##### `match_object_age`<sup>Required</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAge"></a>

```python
match_object_age: S3StorageLensGroupFilterAndMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference">S3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a>

---

##### `match_object_size`<sup>Required</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSize"></a>

```python
match_object_size: S3StorageLensGroupFilterAndMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference">S3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a>

---

##### `match_any_prefix_input`<sup>Optional</sup> <a name="match_any_prefix_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefixInput"></a>

```python
match_any_prefix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix_input`<sup>Optional</sup> <a name="match_any_suffix_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffixInput"></a>

```python
match_any_suffix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_tag_input`<sup>Optional</sup> <a name="match_any_tag_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTagInput"></a>

```python
match_any_tag_input: IResolvable | typing.List[S3StorageLensGroupFilterAndMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]

---

##### `match_object_age_input`<sup>Optional</sup> <a name="match_object_age_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAgeInput"></a>

```python
match_object_age_input: IResolvable | S3StorageLensGroupFilterAndMatchObjectAge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

---

##### `match_object_size_input`<sup>Optional</sup> <a name="match_object_size_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSizeInput"></a>

```python
match_object_size_input: IResolvable | S3StorageLensGroupFilterAndMatchObjectSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

---

##### `match_any_prefix`<sup>Required</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix`<sup>Required</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterAnd
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

---


### S3StorageLensGroupFilterMatchAnyTagList <a name="S3StorageLensGroupFilterMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3StorageLensGroupFilterMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3StorageLensGroupFilterMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]

---


### S3StorageLensGroupFilterMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterMatchAnyTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>

---


### S3StorageLensGroupFilterMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysGreaterThan">reset_days_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysLessThan">reset_days_less_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_greater_than` <a name="reset_days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```python
def reset_days_greater_than() -> None
```

##### `reset_days_less_than` <a name="reset_days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```python
def reset_days_less_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThanInput">days_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThanInput">days_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_greater_than_input`<sup>Optional</sup> <a name="days_greater_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```python
days_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than_input`<sup>Optional</sup> <a name="days_less_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```python
days_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_greater_than`<sup>Required</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than`<sup>Required</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterMatchObjectAge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

---


### S3StorageLensGroupFilterMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesGreaterThan">reset_bytes_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesLessThan">reset_bytes_less_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bytes_greater_than` <a name="reset_bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```python
def reset_bytes_greater_than() -> None
```

##### `reset_bytes_less_than` <a name="reset_bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```python
def reset_bytes_less_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThanInput">bytes_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThanInput">bytes_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_greater_than_input`<sup>Optional</sup> <a name="bytes_greater_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```python
bytes_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than_input`<sup>Optional</sup> <a name="bytes_less_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```python
bytes_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_greater_than`<sup>Required</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than`<sup>Required</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterMatchObjectSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

---


### S3StorageLensGroupFilterOrMatchAnyTagList <a name="S3StorageLensGroupFilterOrMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3StorageLensGroupFilterOrMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]

---


### S3StorageLensGroupFilterOrMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterOrMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterOrMatchAnyTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>

---


### S3StorageLensGroupFilterOrMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterOrMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysGreaterThan">reset_days_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysLessThan">reset_days_less_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_greater_than` <a name="reset_days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```python
def reset_days_greater_than() -> None
```

##### `reset_days_less_than` <a name="reset_days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```python
def reset_days_less_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThanInput">days_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThanInput">days_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan">days_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan">days_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_greater_than_input`<sup>Optional</sup> <a name="days_greater_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```python
days_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than_input`<sup>Optional</sup> <a name="days_less_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```python
days_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_greater_than`<sup>Required</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```python
days_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_less_than`<sup>Required</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan"></a>

```python
days_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterOrMatchObjectAge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

---


### S3StorageLensGroupFilterOrMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterOrMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesGreaterThan">reset_bytes_greater_than</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesLessThan">reset_bytes_less_than</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bytes_greater_than` <a name="reset_bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```python
def reset_bytes_greater_than() -> None
```

##### `reset_bytes_less_than` <a name="reset_bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```python
def reset_bytes_less_than() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThanInput">bytes_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThanInput">bytes_less_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan">bytes_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan">bytes_less_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes_greater_than_input`<sup>Optional</sup> <a name="bytes_greater_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```python
bytes_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than_input`<sup>Optional</sup> <a name="bytes_less_than_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```python
bytes_less_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_greater_than`<sup>Required</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```python
bytes_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bytes_less_than`<sup>Required</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```python
bytes_less_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterOrMatchObjectSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

---


### S3StorageLensGroupFilterOrOutputReference <a name="S3StorageLensGroupFilterOrOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag">put_match_any_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge">put_match_object_age</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize">put_match_object_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyPrefix">reset_match_any_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnySuffix">reset_match_any_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyTag">reset_match_any_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectAge">reset_match_object_age</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectSize">reset_match_object_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_any_tag` <a name="put_match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag"></a>

```python
def put_match_any_tag(
  value: IResolvable | typing.List[S3StorageLensGroupFilterOrMatchAnyTag]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]

---

##### `put_match_object_age` <a name="put_match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge"></a>

```python
def put_match_object_age(
  days_greater_than: typing.Union[int, float] = None,
  days_less_than: typing.Union[int, float] = None
) -> None
```

###### `days_greater_than`<sup>Optional</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge.parameter.daysGreaterThan"></a>

- *Type:* typing.Union[int, float]

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

###### `days_less_than`<sup>Optional</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge.parameter.daysLessThan"></a>

- *Type:* typing.Union[int, float]

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

##### `put_match_object_size` <a name="put_match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize"></a>

```python
def put_match_object_size(
  bytes_greater_than: typing.Union[int, float] = None,
  bytes_less_than: typing.Union[int, float] = None
) -> None
```

###### `bytes_greater_than`<sup>Optional</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize.parameter.bytesGreaterThan"></a>

- *Type:* typing.Union[int, float]

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

###### `bytes_less_than`<sup>Optional</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize.parameter.bytesLessThan"></a>

- *Type:* typing.Union[int, float]

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

##### `reset_match_any_prefix` <a name="reset_match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyPrefix"></a>

```python
def reset_match_any_prefix() -> None
```

##### `reset_match_any_suffix` <a name="reset_match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnySuffix"></a>

```python
def reset_match_any_suffix() -> None
```

##### `reset_match_any_tag` <a name="reset_match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyTag"></a>

```python
def reset_match_any_tag() -> None
```

##### `reset_match_object_age` <a name="reset_match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectAge"></a>

```python
def reset_match_object_age() -> None
```

##### `reset_match_object_size` <a name="reset_match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectSize"></a>

```python
def reset_match_object_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTag">match_any_tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList">S3StorageLensGroupFilterOrMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference">S3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference">S3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefixInput">match_any_prefix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffixInput">match_any_suffix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTagInput">match_any_tag_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAgeInput">match_object_age_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSizeInput">match_object_size_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_any_tag`<sup>Required</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTag"></a>

```python
match_any_tag: S3StorageLensGroupFilterOrMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList">S3StorageLensGroupFilterOrMatchAnyTagList</a>

---

##### `match_object_age`<sup>Required</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAge"></a>

```python
match_object_age: S3StorageLensGroupFilterOrMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference">S3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a>

---

##### `match_object_size`<sup>Required</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSize"></a>

```python
match_object_size: S3StorageLensGroupFilterOrMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference">S3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a>

---

##### `match_any_prefix_input`<sup>Optional</sup> <a name="match_any_prefix_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefixInput"></a>

```python
match_any_prefix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix_input`<sup>Optional</sup> <a name="match_any_suffix_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffixInput"></a>

```python
match_any_suffix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_tag_input`<sup>Optional</sup> <a name="match_any_tag_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTagInput"></a>

```python
match_any_tag_input: IResolvable | typing.List[S3StorageLensGroupFilterOrMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]

---

##### `match_object_age_input`<sup>Optional</sup> <a name="match_object_age_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAgeInput"></a>

```python
match_object_age_input: IResolvable | S3StorageLensGroupFilterOrMatchObjectAge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

---

##### `match_object_size_input`<sup>Optional</sup> <a name="match_object_size_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSizeInput"></a>

```python
match_object_size_input: IResolvable | S3StorageLensGroupFilterOrMatchObjectSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

---

##### `match_any_prefix`<sup>Required</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix`<sup>Required</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilterOr
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

---


### S3StorageLensGroupFilterOutputReference <a name="S3StorageLensGroupFilterOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd">put_and</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag">put_match_any_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge">put_match_object_age</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize">put_match_object_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr">put_or</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetAnd">reset_and</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyPrefix">reset_match_any_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnySuffix">reset_match_any_suffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyTag">reset_match_any_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectAge">reset_match_object_age</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectSize">reset_match_object_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetOr">reset_or</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and` <a name="put_and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd"></a>

```python
def put_and(
  match_any_prefix: typing.List[str] = None,
  match_any_suffix: typing.List[str] = None,
  match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterAndMatchAnyTag] = None,
  match_object_age: S3StorageLensGroupFilterAndMatchObjectAge = None,
  match_object_size: S3StorageLensGroupFilterAndMatchObjectSize = None
) -> None
```

###### `match_any_prefix`<sup>Optional</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.matchAnyPrefix"></a>

- *Type:* typing.List[str]

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

###### `match_any_suffix`<sup>Optional</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.matchAnySuffix"></a>

- *Type:* typing.List[str]

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

###### `match_any_tag`<sup>Optional</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.matchAnyTag"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag">S3StorageLensGroupFilterAndMatchAnyTag</a>]

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

###### `match_object_age`<sup>Optional</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.matchObjectAge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

###### `match_object_size`<sup>Optional</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.matchObjectSize"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

##### `put_match_any_tag` <a name="put_match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag"></a>

```python
def put_match_any_tag(
  value: IResolvable | typing.List[S3StorageLensGroupFilterMatchAnyTag]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]

---

##### `put_match_object_age` <a name="put_match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge"></a>

```python
def put_match_object_age(
  days_greater_than: typing.Union[int, float] = None,
  days_less_than: typing.Union[int, float] = None
) -> None
```

###### `days_greater_than`<sup>Optional</sup> <a name="days_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge.parameter.daysGreaterThan"></a>

- *Type:* typing.Union[int, float]

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

###### `days_less_than`<sup>Optional</sup> <a name="days_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge.parameter.daysLessThan"></a>

- *Type:* typing.Union[int, float]

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

##### `put_match_object_size` <a name="put_match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize"></a>

```python
def put_match_object_size(
  bytes_greater_than: typing.Union[int, float] = None,
  bytes_less_than: typing.Union[int, float] = None
) -> None
```

###### `bytes_greater_than`<sup>Optional</sup> <a name="bytes_greater_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize.parameter.bytesGreaterThan"></a>

- *Type:* typing.Union[int, float]

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

###### `bytes_less_than`<sup>Optional</sup> <a name="bytes_less_than" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize.parameter.bytesLessThan"></a>

- *Type:* typing.Union[int, float]

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

##### `put_or` <a name="put_or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr"></a>

```python
def put_or(
  match_any_prefix: typing.List[str] = None,
  match_any_suffix: typing.List[str] = None,
  match_any_tag: IResolvable | typing.List[S3StorageLensGroupFilterOrMatchAnyTag] = None,
  match_object_age: S3StorageLensGroupFilterOrMatchObjectAge = None,
  match_object_size: S3StorageLensGroupFilterOrMatchObjectSize = None
) -> None
```

###### `match_any_prefix`<sup>Optional</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.matchAnyPrefix"></a>

- *Type:* typing.List[str]

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

###### `match_any_suffix`<sup>Optional</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.matchAnySuffix"></a>

- *Type:* typing.List[str]

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

###### `match_any_tag`<sup>Optional</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.matchAnyTag"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag">S3StorageLensGroupFilterOrMatchAnyTag</a>]

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

###### `match_object_age`<sup>Optional</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.matchObjectAge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

###### `match_object_size`<sup>Optional</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.matchObjectSize"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

##### `reset_and` <a name="reset_and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetAnd"></a>

```python
def reset_and() -> None
```

##### `reset_match_any_prefix` <a name="reset_match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyPrefix"></a>

```python
def reset_match_any_prefix() -> None
```

##### `reset_match_any_suffix` <a name="reset_match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnySuffix"></a>

```python
def reset_match_any_suffix() -> None
```

##### `reset_match_any_tag` <a name="reset_match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyTag"></a>

```python
def reset_match_any_tag() -> None
```

##### `reset_match_object_age` <a name="reset_match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectAge"></a>

```python
def reset_match_object_age() -> None
```

##### `reset_match_object_size` <a name="reset_match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectSize"></a>

```python
def reset_match_object_size() -> None
```

##### `reset_or` <a name="reset_or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetOr"></a>

```python
def reset_or() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference">S3StorageLensGroupFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTag">match_any_tag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList">S3StorageLensGroupFilterMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAge">match_object_age</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference">S3StorageLensGroupFilterMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSize">match_object_size</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference">S3StorageLensGroupFilterMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference">S3StorageLensGroupFilterOrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.andInput">and_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefixInput">match_any_prefix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffixInput">match_any_suffix_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTagInput">match_any_tag_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAgeInput">match_object_age_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSizeInput">match_object_size_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.orInput">or_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefix">match_any_prefix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffix">match_any_suffix</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.and"></a>

```python
and: S3StorageLensGroupFilterAndOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference">S3StorageLensGroupFilterAndOutputReference</a>

---

##### `match_any_tag`<sup>Required</sup> <a name="match_any_tag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTag"></a>

```python
match_any_tag: S3StorageLensGroupFilterMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList">S3StorageLensGroupFilterMatchAnyTagList</a>

---

##### `match_object_age`<sup>Required</sup> <a name="match_object_age" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAge"></a>

```python
match_object_age: S3StorageLensGroupFilterMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference">S3StorageLensGroupFilterMatchObjectAgeOutputReference</a>

---

##### `match_object_size`<sup>Required</sup> <a name="match_object_size" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSize"></a>

```python
match_object_size: S3StorageLensGroupFilterMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference">S3StorageLensGroupFilterMatchObjectSizeOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.or"></a>

```python
or: S3StorageLensGroupFilterOrOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference">S3StorageLensGroupFilterOrOutputReference</a>

---

##### `and_input`<sup>Optional</sup> <a name="and_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.andInput"></a>

```python
and_input: IResolvable | S3StorageLensGroupFilterAnd
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

---

##### `match_any_prefix_input`<sup>Optional</sup> <a name="match_any_prefix_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefixInput"></a>

```python
match_any_prefix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix_input`<sup>Optional</sup> <a name="match_any_suffix_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffixInput"></a>

```python
match_any_suffix_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_tag_input`<sup>Optional</sup> <a name="match_any_tag_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTagInput"></a>

```python
match_any_tag_input: IResolvable | typing.List[S3StorageLensGroupFilterMatchAnyTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag">S3StorageLensGroupFilterMatchAnyTag</a>]

---

##### `match_object_age_input`<sup>Optional</sup> <a name="match_object_age_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAgeInput"></a>

```python
match_object_age_input: IResolvable | S3StorageLensGroupFilterMatchObjectAge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

---

##### `match_object_size_input`<sup>Optional</sup> <a name="match_object_size_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSizeInput"></a>

```python
match_object_size_input: IResolvable | S3StorageLensGroupFilterMatchObjectSize
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

---

##### `or_input`<sup>Optional</sup> <a name="or_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.orInput"></a>

```python
or_input: IResolvable | S3StorageLensGroupFilterOr
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

---

##### `match_any_prefix`<sup>Required</sup> <a name="match_any_prefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefix"></a>

```python
match_any_prefix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_any_suffix`<sup>Required</sup> <a name="match_any_suffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffix"></a>

```python
match_any_suffix: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

---


### S3StorageLensGroupTagsList <a name="S3StorageLensGroupTagsList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3StorageLensGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[S3StorageLensGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>]

---


### S3StorageLensGroupTagsOutputReference <a name="S3StorageLensGroupTagsOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import s3_storage_lens_group

s3StorageLensGroup.S3StorageLensGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | S3StorageLensGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags">S3StorageLensGroupTags</a>

---



