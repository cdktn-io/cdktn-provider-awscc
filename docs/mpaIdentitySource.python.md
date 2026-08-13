# `mpaIdentitySource` Submodule <a name="`mpaIdentitySource` Submodule" id="@cdktn/provider-awscc.mpaIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MpaIdentitySource <a name="MpaIdentitySource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source awscc_mpa_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_source_parameters: MpaIdentitySourceIdentitySourceParameters,
  tags: IResolvable | typing.List[MpaIdentitySourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.identitySourceParameters">identity_source_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_source_parameters`<sup>Required</sup> <a name="identity_source_parameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.identitySourceParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters">put_identity_source_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity_source_parameters` <a name="put_identity_source_parameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters"></a>

```python
def put_identity_source_parameters(
  iam_identity_center: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter
) -> None
```

###### `iam_identity_center`<sup>Required</sup> <a name="iam_identity_center" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters.parameter.iamIdentityCenter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MpaIdentitySourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MpaIdentitySource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MpaIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MpaIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceArn">identity_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParameters">identity_source_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference">MpaIdentitySourceIdentitySourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceType">identity_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList">MpaIdentitySourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParametersInput">identity_source_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_source_arn`<sup>Required</sup> <a name="identity_source_arn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceArn"></a>

```python
identity_source_arn: str
```

- *Type:* str

---

##### `identity_source_parameters`<sup>Required</sup> <a name="identity_source_parameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParameters"></a>

```python
identity_source_parameters: MpaIdentitySourceIdentitySourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference">MpaIdentitySourceIdentitySourceParametersOutputReference</a>

---

##### `identity_source_type`<sup>Required</sup> <a name="identity_source_type" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceType"></a>

```python
identity_source_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tags"></a>

```python
tags: MpaIdentitySourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList">MpaIdentitySourceTagsList</a>

---

##### `identity_source_parameters_input`<sup>Optional</sup> <a name="identity_source_parameters_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParametersInput"></a>

```python
identity_source_parameters_input: IResolvable | MpaIdentitySourceIdentitySourceParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MpaIdentitySourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MpaIdentitySourceConfig <a name="MpaIdentitySourceConfig" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identity_source_parameters: MpaIdentitySourceIdentitySourceParameters,
  tags: IResolvable | typing.List[MpaIdentitySourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.identitySourceParameters">identity_source_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identity_source_parameters`<sup>Required</sup> <a name="identity_source_parameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.identitySourceParameters"></a>

```python
identity_source_parameters: MpaIdentitySourceIdentitySourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MpaIdentitySourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}.

---

### MpaIdentitySourceIdentitySourceParameters <a name="MpaIdentitySourceIdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters(
  iam_identity_center: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.property.iamIdentityCenter">iam_identity_center</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}. |

---

##### `iam_identity_center`<sup>Required</sup> <a name="iam_identity_center" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.property.iamIdentityCenter"></a>

```python
iam_identity_center: MpaIdentitySourceIdentitySourceParametersIamIdentityCenter
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}.

---

### MpaIdentitySourceIdentitySourceParametersIamIdentityCenter <a name="MpaIdentitySourceIdentitySourceParametersIamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter(
  instance_arn: str,
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}. |

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}.

---

### MpaIdentitySourceTags <a name="MpaIdentitySourceTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#key MpaIdentitySource#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#value MpaIdentitySource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference <a name="MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl">approval_portal_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_portal_url`<sup>Required</sup> <a name="approval_portal_url" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl"></a>

```python
approval_portal_url: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MpaIdentitySourceIdentitySourceParametersIamIdentityCenter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---


### MpaIdentitySourceIdentitySourceParametersOutputReference <a name="MpaIdentitySourceIdentitySourceParametersOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter">put_iam_identity_center</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_iam_identity_center` <a name="put_iam_identity_center" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter"></a>

```python
def put_iam_identity_center(
  instance_arn: str,
  region: str
) -> None
```

###### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter.parameter.instanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter">iam_identity_center</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenterInput">iam_identity_center_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_identity_center`<sup>Required</sup> <a name="iam_identity_center" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter"></a>

```python
iam_identity_center: MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a>

---

##### `iam_identity_center_input`<sup>Optional</sup> <a name="iam_identity_center_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenterInput"></a>

```python
iam_identity_center_input: IResolvable | MpaIdentitySourceIdentitySourceParametersIamIdentityCenter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MpaIdentitySourceIdentitySourceParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

---


### MpaIdentitySourceTagsList <a name="MpaIdentitySourceTagsList" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MpaIdentitySourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MpaIdentitySourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>]

---


### MpaIdentitySourceTagsOutputReference <a name="MpaIdentitySourceTagsOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mpa_identity_source

mpaIdentitySource.MpaIdentitySourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MpaIdentitySourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>

---



