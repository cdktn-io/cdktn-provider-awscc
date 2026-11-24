# `lambdaRuntimeVersion` Submodule <a name="`lambdaRuntimeVersion` Submodule" id="@cdktn/provider-awscc.lambdaRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeVersion <a name="LambdaRuntimeVersion" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version awscc_lambda_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersion(
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
  runtime_name: str,
  image_uri: str = None,
  release_notes: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.name">name</a></code> | <code>str</code> | The version identifier (1-128 chars, alphanumeric plus _.-). |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.runtimeName">runtime_name</a></code> | <code>str</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.imageUri">image_uri</a></code> | <code>str</code> | The URI of the OCI image to publish as this runtime version. Not returned in Read. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.releaseNotes">release_notes</a></code> | <code>str</code> | Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.name"></a>

- *Type:* str

The version identifier (1-128 chars, alphanumeric plus _.-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#name LambdaRuntimeVersion#name}

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.runtimeName"></a>

- *Type:* str

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#runtime_name LambdaRuntimeVersion#runtime_name}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.imageUri"></a>

- *Type:* str

The URI of the OCI image to publish as this runtime version. Not returned in Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#image_uri LambdaRuntimeVersion#image_uri}

---

##### `release_notes`<sup>Optional</sup> <a name="release_notes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.Initializer.parameter.releaseNotes"></a>

- *Type:* str

Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#release_notes LambdaRuntimeVersion#release_notes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetReleaseNotes">reset_release_notes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_release_notes` <a name="reset_release_notes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.resetReleaseNotes"></a>

```python
def reset_release_notes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaRuntimeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaRuntimeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaRuntimeVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.compatibility">compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference">LambdaRuntimeVersionCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.platforms">platforms</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList">LambdaRuntimeVersionPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.resolvedUri">resolved_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotesInput">release_notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeNameInput">runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotes">release_notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeName">runtime_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.compatibility"></a>

```python
compatibility: LambdaRuntimeVersionCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference">LambdaRuntimeVersionCompatibilityOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.platforms"></a>

```python
platforms: LambdaRuntimeVersionPlatformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList">LambdaRuntimeVersionPlatformsList</a>

---

##### `resolved_uri`<sup>Required</sup> <a name="resolved_uri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.resolvedUri"></a>

```python
resolved_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `release_notes_input`<sup>Optional</sup> <a name="release_notes_input" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotesInput"></a>

```python
release_notes_input: str
```

- *Type:* str

---

##### `runtime_name_input`<sup>Optional</sup> <a name="runtime_name_input" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeNameInput"></a>

```python
runtime_name_input: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_notes`<sup>Required</sup> <a name="release_notes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.releaseNotes"></a>

```python
release_notes: str
```

- *Type:* str

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeVersionCompatibility <a name="LambdaRuntimeVersionCompatibility" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility()
```


### LambdaRuntimeVersionConfig <a name="LambdaRuntimeVersionConfig" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  runtime_name: str,
  image_uri: str = None,
  release_notes: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.name">name</a></code> | <code>str</code> | The version identifier (1-128 chars, alphanumeric plus _.-). |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.runtimeName">runtime_name</a></code> | <code>str</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.imageUri">image_uri</a></code> | <code>str</code> | The URI of the OCI image to publish as this runtime version. Not returned in Read. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.releaseNotes">release_notes</a></code> | <code>str</code> | Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The version identifier (1-128 chars, alphanumeric plus _.-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#name LambdaRuntimeVersion#name}

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#runtime_name LambdaRuntimeVersion#runtime_name}

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The URI of the OCI image to publish as this runtime version. Not returned in Read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#image_uri LambdaRuntimeVersion#image_uri}

---

##### `release_notes`<sup>Optional</sup> <a name="release_notes" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionConfig.property.releaseNotes"></a>

```python
release_notes: str
```

- *Type:* str

Optional release notes for this runtime version. Updatable; removing it from the template clears the release notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_version#release_notes LambdaRuntimeVersion#release_notes}

---

### LambdaRuntimeVersionPlatforms <a name="LambdaRuntimeVersionPlatforms" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms()
```


## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeVersionCompatibilityOutputReference <a name="LambdaRuntimeVersionCompatibilityOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels">integration_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances">managed_instances</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility">LambdaRuntimeVersionCompatibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_models`<sup>Required</sup> <a name="integration_models" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels"></a>

```python
integration_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances"></a>

```python
managed_instances: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibilityOutputReference.property.internalValue"></a>

```python
internal_value: LambdaRuntimeVersionCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionCompatibility">LambdaRuntimeVersionCompatibility</a>

---


### LambdaRuntimeVersionPlatformsList <a name="LambdaRuntimeVersionPlatformsList" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaRuntimeVersionPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LambdaRuntimeVersionPlatformsOutputReference <a name="LambdaRuntimeVersionPlatformsOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_version

lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms">LambdaRuntimeVersionPlatforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatformsOutputReference.property.internalValue"></a>

```python
internal_value: LambdaRuntimeVersionPlatforms
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeVersion.LambdaRuntimeVersionPlatforms">LambdaRuntimeVersionPlatforms</a>

---



