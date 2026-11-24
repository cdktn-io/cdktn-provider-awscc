# `lambdaRuntimeAlias` Submodule <a name="`lambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.lambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaRuntimeAlias <a name="LambdaRuntimeAlias" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAlias(
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
  runtime_version: str,
  description: str = None,
  release_lifecycle: LambdaRuntimeAliasReleaseLifecycle = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.name">name</a></code> | <code>str</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.runtimeName">runtime_name</a></code> | <code>str</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.runtimeVersion">runtime_version</a></code> | <code>str</code> | The runtime version this alias points to. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the runtime alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.name"></a>

- *Type:* str

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#name LambdaRuntimeAlias#name}

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.runtimeName"></a>

- *Type:* str

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_name LambdaRuntimeAlias#runtime_name}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.runtimeVersion"></a>

- *Type:* str

The runtime version this alias points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_version LambdaRuntimeAlias#runtime_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.description"></a>

- *Type:* str

A description of the runtime alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#description LambdaRuntimeAlias#description}

---

##### `release_lifecycle`<sup>Optional</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.Initializer.parameter.releaseLifecycle"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_lifecycle LambdaRuntimeAlias#release_lifecycle}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle">put_release_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle">reset_release_lifecycle</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_release_lifecycle` <a name="put_release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle"></a>

```python
def put_release_lifecycle(
  deprecation_date: str = None,
  function_create_block_date: str = None,
  function_update_block_date: str = None,
  release_state: str = None
) -> None
```

###### `deprecation_date`<sup>Optional</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.deprecationDate"></a>

- *Type:* str

The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#deprecation_date LambdaRuntimeAlias#deprecation_date}

---

###### `function_create_block_date`<sup>Optional</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.functionCreateBlockDate"></a>

- *Type:* str

The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_create_block_date LambdaRuntimeAlias#function_create_block_date}

---

###### `function_update_block_date`<sup>Optional</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.functionUpdateBlockDate"></a>

- *Type:* str

The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_update_block_date LambdaRuntimeAlias#function_update_block_date}

---

###### `release_state`<sup>Optional</sup> <a name="release_state" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.putReleaseLifecycle.parameter.releaseState"></a>

- *Type:* str

The release state of the alias.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_state LambdaRuntimeAlias#release_state}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_release_lifecycle` <a name="reset_release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.resetReleaseLifecycle"></a>

```python
def reset_release_lifecycle() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaRuntimeAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility">compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn">runtime_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput">release_lifecycle_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput">runtime_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName">runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.compatibility"></a>

```python
compatibility: LambdaRuntimeAliasCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference">LambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `release_lifecycle`<sup>Required</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycle"></a>

```python
release_lifecycle: LambdaRuntimeAliasReleaseLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference">LambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `runtime_version_arn`<sup>Required</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionArn"></a>

```python
runtime_version_arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `release_lifecycle_input`<sup>Optional</sup> <a name="release_lifecycle_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.releaseLifecycleInput"></a>

```python
release_lifecycle_input: IResolvable | LambdaRuntimeAliasReleaseLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---

##### `runtime_name_input`<sup>Optional</sup> <a name="runtime_name_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeNameInput"></a>

```python
runtime_name_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaRuntimeAliasCompatibility <a name="LambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility()
```


### LambdaRuntimeAliasConfig <a name="LambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAliasConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  runtime_name: str,
  runtime_version: str,
  description: str = None,
  release_lifecycle: LambdaRuntimeAliasReleaseLifecycle = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name">name</a></code> | <code>str</code> | The alias name. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName">runtime_name</a></code> | <code>str</code> | The name of the parent runtime. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | The runtime version this alias points to. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description">description</a></code> | <code>str</code> | A description of the runtime alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#name LambdaRuntimeAlias#name}

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

The name of the parent runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_name LambdaRuntimeAlias#runtime_name}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

The runtime version this alias points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#runtime_version LambdaRuntimeAlias#runtime_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the runtime alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#description LambdaRuntimeAlias#description}

---

##### `release_lifecycle`<sup>Optional</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasConfig.property.releaseLifecycle"></a>

```python
release_lifecycle: LambdaRuntimeAliasReleaseLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

The publisher's lifecycle declaration for the alias. Omitting it removes any stored declaration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_lifecycle LambdaRuntimeAlias#release_lifecycle}

---

### LambdaRuntimeAliasReleaseLifecycle <a name="LambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle(
  deprecation_date: str = None,
  function_create_block_date: str = None,
  function_update_block_date: str = None,
  release_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate">deprecation_date</a></code> | <code>str</code> | The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate">function_create_block_date</a></code> | <code>str</code> | The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate">function_update_block_date</a></code> | <code>str</code> | The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState">release_state</a></code> | <code>str</code> | The release state of the alias. |

---

##### `deprecation_date`<sup>Optional</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.deprecationDate"></a>

```python
deprecation_date: str
```

- *Type:* str

The date on which the alias becomes deprecated. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#deprecation_date LambdaRuntimeAlias#deprecation_date}

---

##### `function_create_block_date`<sup>Optional</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionCreateBlockDate"></a>

```python
function_create_block_date: str
```

- *Type:* str

The date on which creating new functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_create_block_date LambdaRuntimeAlias#function_create_block_date}

---

##### `function_update_block_date`<sup>Optional</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.functionUpdateBlockDate"></a>

```python
function_update_block_date: str
```

- *Type:* str

The date on which updating existing functions on this alias is blocked. A UTC calendar date in yyyy-mm-dd format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#function_update_block_date LambdaRuntimeAlias#function_update_block_date}

---

##### `release_state`<sup>Optional</sup> <a name="release_state" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle.property.releaseState"></a>

```python
release_state: str
```

- *Type:* str

The release state of the alias.

DEPRECATED requires a DeprecationDate on or before today (UTC); PREVIEW and GA require a later DeprecationDate, or none. Reads report DEPRECATED once DeprecationDate is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/lambda_runtime_alias#release_state LambdaRuntimeAlias#release_state}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaRuntimeAliasCompatibilityOutputReference <a name="LambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">integration_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">managed_instances</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_models`<sup>Required</sup> <a name="integration_models" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```python
integration_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```python
managed_instances: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```python
internal_value: LambdaRuntimeAliasCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasCompatibility">LambdaRuntimeAliasCompatibility</a>

---


### LambdaRuntimeAliasReleaseLifecycleOutputReference <a name="LambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_runtime_alias

lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate">reset_deprecation_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate">reset_function_create_block_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate">reset_function_update_block_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState">reset_release_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deprecation_date` <a name="reset_deprecation_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetDeprecationDate"></a>

```python
def reset_deprecation_date() -> None
```

##### `reset_function_create_block_date` <a name="reset_function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionCreateBlockDate"></a>

```python
def reset_function_create_block_date() -> None
```

##### `reset_function_update_block_date` <a name="reset_function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetFunctionUpdateBlockDate"></a>

```python
def reset_function_update_block_date() -> None
```

##### `reset_release_state` <a name="reset_release_state" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.resetReleaseState"></a>

```python
def reset_release_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput">deprecation_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput">function_create_block_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput">function_update_block_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput">release_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">deprecation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">function_create_block_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">function_update_block_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">release_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deprecation_date_input`<sup>Optional</sup> <a name="deprecation_date_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDateInput"></a>

```python
deprecation_date_input: str
```

- *Type:* str

---

##### `function_create_block_date_input`<sup>Optional</sup> <a name="function_create_block_date_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDateInput"></a>

```python
function_create_block_date_input: str
```

- *Type:* str

---

##### `function_update_block_date_input`<sup>Optional</sup> <a name="function_update_block_date_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDateInput"></a>

```python
function_update_block_date_input: str
```

- *Type:* str

---

##### `release_state_input`<sup>Optional</sup> <a name="release_state_input" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseStateInput"></a>

```python
release_state_input: str
```

- *Type:* str

---

##### `deprecation_date`<sup>Required</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```python
deprecation_date: str
```

- *Type:* str

---

##### `function_create_block_date`<sup>Required</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```python
function_create_block_date: str
```

- *Type:* str

---

##### `function_update_block_date`<sup>Required</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```python
function_update_block_date: str
```

- *Type:* str

---

##### `release_state`<sup>Required</sup> <a name="release_state" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```python
release_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaRuntimeAliasReleaseLifecycle
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaRuntimeAlias.LambdaRuntimeAliasReleaseLifecycle">LambdaRuntimeAliasReleaseLifecycle</a>

---



