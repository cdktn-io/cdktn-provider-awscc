# `ivsEncoderConfiguration` Submodule <a name="`ivsEncoderConfiguration` Submodule" id="@cdktn/provider-awscc.ivsEncoderConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsEncoderConfiguration <a name="IvsEncoderConfiguration" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration awscc_ivs_encoder_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str = None,
  tags: IResolvable | typing.List[IvsEncoderConfigurationTags] = None,
  video: IvsEncoderConfigurationVideo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Encoder configuration name. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.video">video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Encoder configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#name IvsEncoderConfiguration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#tags IvsEncoderConfiguration#tags}

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.video"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#video IvsEncoderConfiguration#video}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo">put_video</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetVideo">reset_video</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IvsEncoderConfigurationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]

---

##### `put_video` <a name="put_video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo"></a>

```python
def put_video(
  bitrate: typing.Union[int, float] = None,
  framerate: typing.Union[int, float] = None,
  height: typing.Union[int, float] = None,
  width: typing.Union[int, float] = None
) -> None
```

###### `bitrate`<sup>Optional</sup> <a name="bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo.parameter.bitrate"></a>

- *Type:* typing.Union[int, float]

Bitrate for generated output, in bps. Default: 2500000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#bitrate IvsEncoderConfiguration#bitrate}

---

###### `framerate`<sup>Optional</sup> <a name="framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo.parameter.framerate"></a>

- *Type:* typing.Union[int, float]

Video frame rate, in fps. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#framerate IvsEncoderConfiguration#framerate}

---

###### `height`<sup>Optional</sup> <a name="height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo.parameter.height"></a>

- *Type:* typing.Union[int, float]

Video-resolution height.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#height IvsEncoderConfiguration#height}

---

###### `width`<sup>Optional</sup> <a name="width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo.parameter.width"></a>

- *Type:* typing.Union[int, float]

Video-resolution width.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#width IvsEncoderConfiguration#width}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_video` <a name="reset_video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetVideo"></a>

```python
def reset_video() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IvsEncoderConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IvsEncoderConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsEncoderConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList">IvsEncoderConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.video">video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference">IvsEncoderConfigurationVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.videoInput">video_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tags"></a>

```python
tags: IvsEncoderConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList">IvsEncoderConfigurationTagsList</a>

---

##### `video`<sup>Required</sup> <a name="video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.video"></a>

```python
video: IvsEncoderConfigurationVideoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference">IvsEncoderConfigurationVideoOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IvsEncoderConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]

---

##### `video_input`<sup>Optional</sup> <a name="video_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.videoInput"></a>

```python
video_input: IResolvable | IvsEncoderConfigurationVideo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IvsEncoderConfigurationConfig <a name="IvsEncoderConfigurationConfig" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str = None,
  tags: IResolvable | typing.List[IvsEncoderConfigurationTags] = None,
  video: IvsEncoderConfigurationVideo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.name">name</a></code> | <code>str</code> | Encoder configuration name. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.video">video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Encoder configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#name IvsEncoderConfiguration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IvsEncoderConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#tags IvsEncoderConfiguration#tags}

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.video"></a>

```python
video: IvsEncoderConfigurationVideo
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#video IvsEncoderConfiguration#video}

---

### IvsEncoderConfigurationTags <a name="IvsEncoderConfigurationTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfigurationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#key IvsEncoderConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#value IvsEncoderConfiguration#value}

---

### IvsEncoderConfigurationVideo <a name="IvsEncoderConfigurationVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfigurationVideo(
  bitrate: typing.Union[int, float] = None,
  framerate: typing.Union[int, float] = None,
  height: typing.Union[int, float] = None,
  width: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.bitrate">bitrate</a></code> | <code>typing.Union[int, float]</code> | Bitrate for generated output, in bps. Default: 2500000. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.framerate">framerate</a></code> | <code>typing.Union[int, float]</code> | Video frame rate, in fps. Default: 30. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.height">height</a></code> | <code>typing.Union[int, float]</code> | Video-resolution height. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.width">width</a></code> | <code>typing.Union[int, float]</code> | Video-resolution width. |

---

##### `bitrate`<sup>Optional</sup> <a name="bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.bitrate"></a>

```python
bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Bitrate for generated output, in bps. Default: 2500000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#bitrate IvsEncoderConfiguration#bitrate}

---

##### `framerate`<sup>Optional</sup> <a name="framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.framerate"></a>

```python
framerate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Video frame rate, in fps. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#framerate IvsEncoderConfiguration#framerate}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Video-resolution height.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#height IvsEncoderConfiguration#height}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Video-resolution width.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#width IvsEncoderConfiguration#width}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsEncoderConfigurationTagsList <a name="IvsEncoderConfigurationTagsList" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IvsEncoderConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IvsEncoderConfigurationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>]

---


### IvsEncoderConfigurationTagsOutputReference <a name="IvsEncoderConfigurationTagsOutputReference" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsEncoderConfigurationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>

---


### IvsEncoderConfigurationVideoOutputReference <a name="IvsEncoderConfigurationVideoOutputReference" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ivs_encoder_configuration

ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetBitrate">reset_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetFramerate">reset_framerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetHeight">reset_height</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetWidth">reset_width</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bitrate` <a name="reset_bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetBitrate"></a>

```python
def reset_bitrate() -> None
```

##### `reset_framerate` <a name="reset_framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetFramerate"></a>

```python
def reset_framerate() -> None
```

##### `reset_height` <a name="reset_height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetHeight"></a>

```python
def reset_height() -> None
```

##### `reset_width` <a name="reset_width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetWidth"></a>

```python
def reset_width() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrateInput">bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerateInput">framerate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.heightInput">height_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.widthInput">width_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrate">bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerate">framerate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bitrate_input`<sup>Optional</sup> <a name="bitrate_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrateInput"></a>

```python
bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `framerate_input`<sup>Optional</sup> <a name="framerate_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerateInput"></a>

```python
framerate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `height_input`<sup>Optional</sup> <a name="height_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.heightInput"></a>

```python
height_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width_input`<sup>Optional</sup> <a name="width_input" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.widthInput"></a>

```python
width_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bitrate`<sup>Required</sup> <a name="bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrate"></a>

```python
bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `framerate`<sup>Required</sup> <a name="framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerate"></a>

```python
framerate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IvsEncoderConfigurationVideo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---



