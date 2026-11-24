# `lambdaRuntime` Submodule <a name="`lambdaRuntime` Submodule" id="@cdktn/provider-awscc.lambdaRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntime <a name="LambdaRuntime" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime awscc_lambda_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntime(
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
  description: str = None,
  license_info: str = None,
  release_lifecycle: LambdaRuntimeReleaseLifecycle = None,
  tags: IResolvable | typing.List[LambdaRuntimeTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.licenseInfo">license_info</a></code> | <code>str</code> | Licensing information for the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]</code> | A list of tags to apply to the runtime. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.name"></a>

- *Type:* str

The name of the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#name LambdaRuntime#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.description"></a>

- *Type:* str

A description of the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#description LambdaRuntime#description}

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.licenseInfo"></a>

- *Type:* str

Licensing information for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#license_info LambdaRuntime#license_info}

---

##### `release_lifecycle`<sup>Optional</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.releaseLifecycle"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_lifecycle LambdaRuntime#release_lifecycle}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]

A list of tags to apply to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#tags LambdaRuntime#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle">put_release_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetLicenseInfo">reset_license_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetReleaseLifecycle">reset_release_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_release_lifecycle` <a name="put_release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle"></a>

```python
def put_release_lifecycle(
  deprecation_date: str = None,
  function_create_block_date: str = None,
  function_update_block_date: str = None,
  release_state: str = None
) -> None
```

###### `deprecation_date`<sup>Optional</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle.parameter.deprecationDate"></a>

- *Type:* str

The date on which the runtime becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#deprecation_date LambdaRuntime#deprecation_date}

---

###### `function_create_block_date`<sup>Optional</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle.parameter.functionCreateBlockDate"></a>

- *Type:* str

The date on which creating new functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_create_block_date LambdaRuntime#function_create_block_date}

---

###### `function_update_block_date`<sup>Optional</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle.parameter.functionUpdateBlockDate"></a>

- *Type:* str

The date on which updating existing functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_update_block_date LambdaRuntime#function_update_block_date}

---

###### `release_state`<sup>Optional</sup> <a name="release_state" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putReleaseLifecycle.parameter.releaseState"></a>

- *Type:* str

The release state of the runtime.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_state LambdaRuntime#release_state}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LambdaRuntimeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_license_info` <a name="reset_license_info" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetLicenseInfo"></a>

```python
def reset_license_info() -> None
```

##### `reset_release_lifecycle` <a name="reset_release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetReleaseLifecycle"></a>

```python
def reset_release_lifecycle() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaRuntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference">LambdaRuntimeReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList">LambdaRuntimeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfoInput">license_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycleInput">release_lifecycle_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfo">license_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `release_lifecycle`<sup>Required</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycle"></a>

```python
release_lifecycle: LambdaRuntimeReleaseLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference">LambdaRuntimeReleaseLifecycleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tags"></a>

```python
tags: LambdaRuntimeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList">LambdaRuntimeTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `license_info_input`<sup>Optional</sup> <a name="license_info_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfoInput"></a>

```python
license_info_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `release_lifecycle_input`<sup>Optional</sup> <a name="release_lifecycle_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.releaseLifecycleInput"></a>

```python
release_lifecycle_input: IResolvable | LambdaRuntimeReleaseLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LambdaRuntimeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `license_info`<sup>Required</sup> <a name="license_info" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeConfig <a name="LambdaRuntimeConfig" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntimeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  license_info: str = None,
  release_lifecycle: LambdaRuntimeReleaseLifecycle = None,
  tags: IResolvable | typing.List[LambdaRuntimeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.name">name</a></code> | <code>str</code> | The name of the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.description">description</a></code> | <code>str</code> | A description of the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.licenseInfo">license_info</a></code> | <code>str</code> | Licensing information for the runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]</code> | A list of tags to apply to the runtime. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#name LambdaRuntime#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#description LambdaRuntime#description}

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

Licensing information for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#license_info LambdaRuntime#license_info}

---

##### `release_lifecycle`<sup>Optional</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.releaseLifecycle"></a>

```python
release_lifecycle: LambdaRuntimeReleaseLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

The publisher's lifecycle declaration for the runtime. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_lifecycle LambdaRuntime#release_lifecycle}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LambdaRuntimeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]

A list of tags to apply to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#tags LambdaRuntime#tags}

---

### LambdaRuntimeReleaseLifecycle <a name="LambdaRuntimeReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntimeReleaseLifecycle(
  deprecation_date: str = None,
  function_create_block_date: str = None,
  function_update_block_date: str = None,
  release_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.deprecationDate">deprecation_date</a></code> | <code>str</code> | The date on which the runtime becomes deprecated. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionCreateBlockDate">function_create_block_date</a></code> | <code>str</code> | The date on which creating new functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionUpdateBlockDate">function_update_block_date</a></code> | <code>str</code> | The date on which updating existing functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.releaseState">release_state</a></code> | <code>str</code> | The release state of the runtime. |

---

##### `deprecation_date`<sup>Optional</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.deprecationDate"></a>

```python
deprecation_date: str
```

- *Type:* str

The date on which the runtime becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#deprecation_date LambdaRuntime#deprecation_date}

---

##### `function_create_block_date`<sup>Optional</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionCreateBlockDate"></a>

```python
function_create_block_date: str
```

- *Type:* str

The date on which creating new functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_create_block_date LambdaRuntime#function_create_block_date}

---

##### `function_update_block_date`<sup>Optional</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.functionUpdateBlockDate"></a>

```python
function_update_block_date: str
```

- *Type:* str

The date on which updating existing functions on this runtime is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#function_update_block_date LambdaRuntime#function_update_block_date}

---

##### `release_state`<sup>Optional</sup> <a name="release_state" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle.property.releaseState"></a>

```python
release_state: str
```

- *Type:* str

The release state of the runtime.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#release_state LambdaRuntime#release_state}

---

### LambdaRuntimeTags <a name="LambdaRuntimeTags" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntimeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#key LambdaRuntime#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime#value LambdaRuntime#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeReleaseLifecycleOutputReference <a name="LambdaRuntimeReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetDeprecationDate">reset_deprecation_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionCreateBlockDate">reset_function_create_block_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate">reset_function_update_block_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetReleaseState">reset_release_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deprecation_date` <a name="reset_deprecation_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetDeprecationDate"></a>

```python
def reset_deprecation_date() -> None
```

##### `reset_function_create_block_date` <a name="reset_function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionCreateBlockDate"></a>

```python
def reset_function_create_block_date() -> None
```

##### `reset_function_update_block_date` <a name="reset_function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate"></a>

```python
def reset_function_update_block_date() -> None
```

##### `reset_release_state` <a name="reset_release_state" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.resetReleaseState"></a>

```python
def reset_release_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDateInput">deprecation_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDateInput">function_create_block_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput">function_update_block_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseStateInput">release_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDate">deprecation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDate">function_create_block_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDate">function_update_block_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseState">release_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deprecation_date_input`<sup>Optional</sup> <a name="deprecation_date_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDateInput"></a>

```python
deprecation_date_input: str
```

- *Type:* str

---

##### `function_create_block_date_input`<sup>Optional</sup> <a name="function_create_block_date_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDateInput"></a>

```python
function_create_block_date_input: str
```

- *Type:* str

---

##### `function_update_block_date_input`<sup>Optional</sup> <a name="function_update_block_date_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput"></a>

```python
function_update_block_date_input: str
```

- *Type:* str

---

##### `release_state_input`<sup>Optional</sup> <a name="release_state_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseStateInput"></a>

```python
release_state_input: str
```

- *Type:* str

---

##### `deprecation_date`<sup>Required</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.deprecationDate"></a>

```python
deprecation_date: str
```

- *Type:* str

---

##### `function_create_block_date`<sup>Required</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```python
function_create_block_date: str
```

- *Type:* str

---

##### `function_update_block_date`<sup>Required</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```python
function_update_block_date: str
```

- *Type:* str

---

##### `release_state`<sup>Required</sup> <a name="release_state" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.releaseState"></a>

```python
release_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaRuntimeReleaseLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeReleaseLifecycle">LambdaRuntimeReleaseLifecycle</a>

---


### LambdaRuntimeTagsList <a name="LambdaRuntimeTagsList" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntimeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaRuntimeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaRuntimeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>]

---


### LambdaRuntimeTagsOutputReference <a name="LambdaRuntimeTagsOutputReference" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime

lambdaRuntime.LambdaRuntimeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaRuntimeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntime.LambdaRuntimeTags">LambdaRuntimeTags</a>

---



