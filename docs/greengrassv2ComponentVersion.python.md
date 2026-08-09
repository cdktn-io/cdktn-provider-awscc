# `greengrassv2ComponentVersion` Submodule <a name="`greengrassv2ComponentVersion` Submodule" id="@cdktn/provider-awscc.greengrassv2ComponentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Greengrassv2ComponentVersion <a name="Greengrassv2ComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version awscc_greengrassv2_component_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  inline_recipe: str = None,
  lambda_function: Greengrassv2ComponentVersionLambdaFunction = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.inlineRecipe">inline_recipe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lambdaFunction">lambda_function</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inline_recipe`<sup>Optional</sup> <a name="inline_recipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.inlineRecipe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}.

---

##### `lambda_function`<sup>Optional</sup> <a name="lambda_function" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lambdaFunction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction">put_lambda_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetInlineRecipe">reset_inline_recipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetLambdaFunction">reset_lambda_function</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lambda_function` <a name="put_lambda_function" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction"></a>

```python
def put_lambda_function(
  component_dependencies: IResolvable | typing.Mapping[Greengrassv2ComponentVersionLambdaFunctionComponentDependencies] = None,
  component_lambda_parameters: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters = None,
  component_name: str = None,
  component_platforms: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms] = None,
  component_version: str = None,
  lambda_arn: str = None
) -> None
```

###### `component_dependencies`<sup>Optional</sup> <a name="component_dependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.componentDependencies"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}.

---

###### `component_lambda_parameters`<sup>Optional</sup> <a name="component_lambda_parameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.componentLambdaParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}.

---

###### `component_name`<sup>Optional</sup> <a name="component_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.componentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}.

---

###### `component_platforms`<sup>Optional</sup> <a name="component_platforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.componentPlatforms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}.

---

###### `component_version`<sup>Optional</sup> <a name="component_version" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.componentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}.

---

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}.

---

##### `reset_inline_recipe` <a name="reset_inline_recipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetInlineRecipe"></a>

```python
def reset_inline_recipe() -> None
```

##### `reset_lambda_function` <a name="reset_lambda_function" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetLambdaFunction"></a>

```python
def reset_lambda_function() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Greengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Greengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Greengrassv2ComponentVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Greengrassv2ComponentVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Greengrassv2ComponentVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentName">component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunction">lambda_function</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference">Greengrassv2ComponentVersionLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipeInput">inline_recipe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunctionInput">lambda_function_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipe">inline_recipe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `component_name`<sup>Required</sup> <a name="component_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lambda_function`<sup>Required</sup> <a name="lambda_function" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunction"></a>

```python
lambda_function: Greengrassv2ComponentVersionLambdaFunctionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference">Greengrassv2ComponentVersionLambdaFunctionOutputReference</a>

---

##### `inline_recipe_input`<sup>Optional</sup> <a name="inline_recipe_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipeInput"></a>

```python
inline_recipe_input: str
```

- *Type:* str

---

##### `lambda_function_input`<sup>Optional</sup> <a name="lambda_function_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunctionInput"></a>

```python
lambda_function_input: IResolvable | Greengrassv2ComponentVersionLambdaFunction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `inline_recipe`<sup>Required</sup> <a name="inline_recipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipe"></a>

```python
inline_recipe: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Greengrassv2ComponentVersionConfig <a name="Greengrassv2ComponentVersionConfig" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  inline_recipe: str = None,
  lambda_function: Greengrassv2ComponentVersionLambdaFunction = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.inlineRecipe">inline_recipe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lambdaFunction">lambda_function</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inline_recipe`<sup>Optional</sup> <a name="inline_recipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.inlineRecipe"></a>

```python
inline_recipe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}.

---

##### `lambda_function`<sup>Optional</sup> <a name="lambda_function" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lambdaFunction"></a>

```python
lambda_function: Greengrassv2ComponentVersionLambdaFunction
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}.

---

### Greengrassv2ComponentVersionLambdaFunction <a name="Greengrassv2ComponentVersionLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction(
  component_dependencies: IResolvable | typing.Mapping[Greengrassv2ComponentVersionLambdaFunctionComponentDependencies] = None,
  component_lambda_parameters: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters = None,
  component_name: str = None,
  component_platforms: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms] = None,
  component_version: str = None,
  lambda_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentDependencies">component_dependencies</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentLambdaParameters">component_lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentName">component_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentPlatforms">component_platforms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentVersion">component_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}. |

---

##### `component_dependencies`<sup>Optional</sup> <a name="component_dependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentDependencies"></a>

```python
component_dependencies: IResolvable | typing.Mapping[Greengrassv2ComponentVersionLambdaFunctionComponentDependencies]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}.

---

##### `component_lambda_parameters`<sup>Optional</sup> <a name="component_lambda_parameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentLambdaParameters"></a>

```python
component_lambda_parameters: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}.

---

##### `component_name`<sup>Optional</sup> <a name="component_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}.

---

##### `component_platforms`<sup>Optional</sup> <a name="component_platforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentPlatforms"></a>

```python
component_platforms: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}.

---

##### `component_version`<sup>Optional</sup> <a name="component_version" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}.

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentDependencies <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies(
  dependency_type: str = None,
  version_requirement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.dependencyType">dependency_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#dependency_type Greengrassv2ComponentVersion#dependency_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.versionRequirement">version_requirement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#version_requirement Greengrassv2ComponentVersion#version_requirement}. |

---

##### `dependency_type`<sup>Optional</sup> <a name="dependency_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.dependencyType"></a>

```python
dependency_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#dependency_type Greengrassv2ComponentVersion#dependency_type}.

---

##### `version_requirement`<sup>Optional</sup> <a name="version_requirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.versionRequirement"></a>

```python
version_requirement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#version_requirement Greengrassv2ComponentVersion#version_requirement}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters(
  environment_variables: typing.Mapping[str] = None,
  event_sources: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources] = None,
  exec_args: typing.List[str] = None,
  input_payload_encoding_type: str = None,
  linux_process_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams = None,
  max_idle_time_in_seconds: typing.Union[int, float] = None,
  max_instances_count: typing.Union[int, float] = None,
  max_queue_size: typing.Union[int, float] = None,
  pinned: bool | IResolvable = None,
  status_timeout_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.eventSources">event_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.execArgs">exec_args</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.inputPayloadEncodingType">input_payload_encoding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.linuxProcessParams">linux_process_params</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxIdleTimeInSeconds">max_idle_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxInstancesCount">max_instances_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxQueueSize">max_queue_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.statusTimeoutInSeconds">status_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}. |

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}.

---

##### `event_sources`<sup>Optional</sup> <a name="event_sources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.eventSources"></a>

```python
event_sources: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}.

---

##### `exec_args`<sup>Optional</sup> <a name="exec_args" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.execArgs"></a>

```python
exec_args: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}.

---

##### `input_payload_encoding_type`<sup>Optional</sup> <a name="input_payload_encoding_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.inputPayloadEncodingType"></a>

```python
input_payload_encoding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}.

---

##### `linux_process_params`<sup>Optional</sup> <a name="linux_process_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.linuxProcessParams"></a>

```python
linux_process_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}.

---

##### `max_idle_time_in_seconds`<sup>Optional</sup> <a name="max_idle_time_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxIdleTimeInSeconds"></a>

```python
max_idle_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}.

---

##### `max_instances_count`<sup>Optional</sup> <a name="max_instances_count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxInstancesCount"></a>

```python
max_instances_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}.

---

##### `max_queue_size`<sup>Optional</sup> <a name="max_queue_size" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxQueueSize"></a>

```python
max_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}.

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.pinned"></a>

```python
pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}.

---

##### `status_timeout_in_seconds`<sup>Optional</sup> <a name="status_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.statusTimeoutInSeconds"></a>

```python
status_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources(
  topic: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#topic Greengrassv2ComponentVersion#topic}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#type Greengrassv2ComponentVersion#type}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#topic Greengrassv2ComponentVersion#topic}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#type Greengrassv2ComponentVersion#type}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams(
  container_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams = None,
  isolation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.containerParams">container_params</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}. |

---

##### `container_params`<sup>Optional</sup> <a name="container_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.containerParams"></a>

```python
container_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams(
  devices: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices] = None,
  memory_size_in_kb: typing.Union[int, float] = None,
  mount_ro_sysfs: bool | IResolvable = None,
  volumes: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.devices">devices</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.memorySizeInKb">memory_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.mountRoSysfs">mount_ro_sysfs</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.volumes">volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}. |

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.devices"></a>

```python
devices: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}.

---

##### `memory_size_in_kb`<sup>Optional</sup> <a name="memory_size_in_kb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.memorySizeInKb"></a>

```python
memory_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}.

---

##### `mount_ro_sysfs`<sup>Optional</sup> <a name="mount_ro_sysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.mountRoSysfs"></a>

```python
mount_ro_sysfs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.volumes"></a>

```python
volumes: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices(
  add_group_owner: bool | IResolvable = None,
  path: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.addGroupOwner">add_group_owner</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#path Greengrassv2ComponentVersion#path}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}. |

---

##### `add_group_owner`<sup>Optional</sup> <a name="add_group_owner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.addGroupOwner"></a>

```python
add_group_owner: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#path Greengrassv2ComponentVersion#path}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes(
  add_group_owner: bool | IResolvable = None,
  destination_path: str = None,
  permission: str = None,
  source_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.addGroupOwner">add_group_owner</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.destinationPath">destination_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#destination_path Greengrassv2ComponentVersion#destination_path}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.sourcePath">source_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#source_path Greengrassv2ComponentVersion#source_path}. |

---

##### `add_group_owner`<sup>Optional</sup> <a name="add_group_owner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.addGroupOwner"></a>

```python
add_group_owner: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}.

---

##### `destination_path`<sup>Optional</sup> <a name="destination_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#destination_path Greengrassv2ComponentVersion#destination_path}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}.

---

##### `source_path`<sup>Optional</sup> <a name="source_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#source_path Greengrassv2ComponentVersion#source_path}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms(
  attributes: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#attributes Greengrassv2ComponentVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#name Greengrassv2ComponentVersion#name}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#attributes Greengrassv2ComponentVersion#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#name Greengrassv2ComponentVersion#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get"></a>

```python
def get(
  key: str
) -> Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[Greengrassv2ComponentVersionLambdaFunctionComponentDependencies]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetDependencyType">reset_dependency_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetVersionRequirement">reset_version_requirement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dependency_type` <a name="reset_dependency_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetDependencyType"></a>

```python
def reset_dependency_type() -> None
```

##### `reset_version_requirement` <a name="reset_version_requirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetVersionRequirement"></a>

```python
def reset_version_requirement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyTypeInput">dependency_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirementInput">version_requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType">dependency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement">version_requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency_type_input`<sup>Optional</sup> <a name="dependency_type_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyTypeInput"></a>

```python
dependency_type_input: str
```

- *Type:* str

---

##### `version_requirement_input`<sup>Optional</sup> <a name="version_requirement_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirementInput"></a>

```python
version_requirement_input: str
```

- *Type:* str

---

##### `dependency_type`<sup>Required</sup> <a name="dependency_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType"></a>

```python
dependency_type: str
```

- *Type:* str

---

##### `version_requirement`<sup>Required</sup> <a name="version_requirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement"></a>

```python
version_requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentDependencies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetTopic">reset_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic` <a name="reset_topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetAddGroupOwner">reset_add_group_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add_group_owner` <a name="reset_add_group_owner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetAddGroupOwner"></a>

```python
def reset_add_group_owner() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwnerInput">add_group_owner_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner">add_group_owner</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_group_owner_input`<sup>Optional</sup> <a name="add_group_owner_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwnerInput"></a>

```python
add_group_owner_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `add_group_owner`<sup>Required</sup> <a name="add_group_owner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner"></a>

```python
add_group_owner: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices">put_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetDevices">reset_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMemorySizeInKb">reset_memory_size_in_kb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMountRoSysfs">reset_mount_ro_sysfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_devices` <a name="put_devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices"></a>

```python
def put_devices(
  value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]

---

##### `put_volumes` <a name="put_volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]

---

##### `reset_devices` <a name="reset_devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetDevices"></a>

```python
def reset_devices() -> None
```

##### `reset_memory_size_in_kb` <a name="reset_memory_size_in_kb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMemorySizeInKb"></a>

```python
def reset_memory_size_in_kb() -> None
```

##### `reset_mount_ro_sysfs` <a name="reset_mount_ro_sysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMountRoSysfs"></a>

```python
def reset_mount_ro_sysfs() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devicesInput">devices_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKbInput">memory_size_in_kb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfsInput">mount_ro_sysfs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumesInput">volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb">memory_size_in_kb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs">mount_ro_sysfs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices"></a>

```python
devices: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes"></a>

```python
volumes: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a>

---

##### `devices_input`<sup>Optional</sup> <a name="devices_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devicesInput"></a>

```python
devices_input: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]

---

##### `memory_size_in_kb_input`<sup>Optional</sup> <a name="memory_size_in_kb_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKbInput"></a>

```python
memory_size_in_kb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_ro_sysfs_input`<sup>Optional</sup> <a name="mount_ro_sysfs_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfsInput"></a>

```python
mount_ro_sysfs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumesInput"></a>

```python
volumes_input: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]

---

##### `memory_size_in_kb`<sup>Required</sup> <a name="memory_size_in_kb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb"></a>

```python
memory_size_in_kb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_ro_sysfs`<sup>Required</sup> <a name="mount_ro_sysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs"></a>

```python
mount_ro_sysfs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetAddGroupOwner">reset_add_group_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetDestinationPath">reset_destination_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetPermission">reset_permission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetSourcePath">reset_source_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add_group_owner` <a name="reset_add_group_owner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetAddGroupOwner"></a>

```python
def reset_add_group_owner() -> None
```

##### `reset_destination_path` <a name="reset_destination_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetDestinationPath"></a>

```python
def reset_destination_path() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```

##### `reset_source_path` <a name="reset_source_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetSourcePath"></a>

```python
def reset_source_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwnerInput">add_group_owner_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPathInput">destination_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePathInput">source_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner">add_group_owner</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath">source_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_group_owner_input`<sup>Optional</sup> <a name="add_group_owner_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwnerInput"></a>

```python
add_group_owner_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `destination_path_input`<sup>Optional</sup> <a name="destination_path_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPathInput"></a>

```python
destination_path_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `source_path_input`<sup>Optional</sup> <a name="source_path_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePathInput"></a>

```python
source_path_input: str
```

- *Type:* str

---

##### `add_group_owner`<sup>Required</sup> <a name="add_group_owner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner"></a>

```python
add_group_owner: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `source_path`<sup>Required</sup> <a name="source_path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams">put_container_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetContainerParams">reset_container_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_params` <a name="put_container_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams"></a>

```python
def put_container_params(
  devices: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices] = None,
  memory_size_in_kb: typing.Union[int, float] = None,
  mount_ro_sysfs: bool | IResolvable = None,
  volumes: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes] = None
) -> None
```

###### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams.parameter.devices"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}.

---

###### `memory_size_in_kb`<sup>Optional</sup> <a name="memory_size_in_kb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams.parameter.memorySizeInKb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}.

---

###### `mount_ro_sysfs`<sup>Optional</sup> <a name="mount_ro_sysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams.parameter.mountRoSysfs"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}.

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams.parameter.volumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}.

---

##### `reset_container_params` <a name="reset_container_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetContainerParams"></a>

```python
def reset_container_params() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams">container_params</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParamsInput">container_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_params`<sup>Required</sup> <a name="container_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams"></a>

```python
container_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a>

---

##### `container_params_input`<sup>Optional</sup> <a name="container_params_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParamsInput"></a>

```python
container_params_input: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources">put_event_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams">put_linux_process_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEventSources">reset_event_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetExecArgs">reset_exec_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetInputPayloadEncodingType">reset_input_payload_encoding_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetLinuxProcessParams">reset_linux_process_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxIdleTimeInSeconds">reset_max_idle_time_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxInstancesCount">reset_max_instances_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxQueueSize">reset_max_queue_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetPinned">reset_pinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetStatusTimeoutInSeconds">reset_status_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_sources` <a name="put_event_sources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources"></a>

```python
def put_event_sources(
  value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]

---

##### `put_linux_process_params` <a name="put_linux_process_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams"></a>

```python
def put_linux_process_params(
  container_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams = None,
  isolation_mode: str = None
) -> None
```

###### `container_params`<sup>Optional</sup> <a name="container_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams.parameter.containerParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}.

---

###### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}.

---

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_event_sources` <a name="reset_event_sources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEventSources"></a>

```python
def reset_event_sources() -> None
```

##### `reset_exec_args` <a name="reset_exec_args" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetExecArgs"></a>

```python
def reset_exec_args() -> None
```

##### `reset_input_payload_encoding_type` <a name="reset_input_payload_encoding_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetInputPayloadEncodingType"></a>

```python
def reset_input_payload_encoding_type() -> None
```

##### `reset_linux_process_params` <a name="reset_linux_process_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetLinuxProcessParams"></a>

```python
def reset_linux_process_params() -> None
```

##### `reset_max_idle_time_in_seconds` <a name="reset_max_idle_time_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxIdleTimeInSeconds"></a>

```python
def reset_max_idle_time_in_seconds() -> None
```

##### `reset_max_instances_count` <a name="reset_max_instances_count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxInstancesCount"></a>

```python
def reset_max_instances_count() -> None
```

##### `reset_max_queue_size` <a name="reset_max_queue_size" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxQueueSize"></a>

```python
def reset_max_queue_size() -> None
```

##### `reset_pinned` <a name="reset_pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetPinned"></a>

```python
def reset_pinned() -> None
```

##### `reset_status_timeout_in_seconds` <a name="reset_status_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetStatusTimeoutInSeconds"></a>

```python
def reset_status_timeout_in_seconds() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources">event_sources</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams">linux_process_params</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSourcesInput">event_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgsInput">exec_args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingTypeInput">input_payload_encoding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParamsInput">linux_process_params_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSecondsInput">max_idle_time_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCountInput">max_instances_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSizeInput">max_queue_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinnedInput">pinned_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSecondsInput">status_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs">exec_args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType">input_payload_encoding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds">max_idle_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount">max_instances_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize">max_queue_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds">status_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_sources`<sup>Required</sup> <a name="event_sources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources"></a>

```python
event_sources: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a>

---

##### `linux_process_params`<sup>Required</sup> <a name="linux_process_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams"></a>

```python
linux_process_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a>

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `event_sources_input`<sup>Optional</sup> <a name="event_sources_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSourcesInput"></a>

```python
event_sources_input: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]

---

##### `exec_args_input`<sup>Optional</sup> <a name="exec_args_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgsInput"></a>

```python
exec_args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_payload_encoding_type_input`<sup>Optional</sup> <a name="input_payload_encoding_type_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingTypeInput"></a>

```python
input_payload_encoding_type_input: str
```

- *Type:* str

---

##### `linux_process_params_input`<sup>Optional</sup> <a name="linux_process_params_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParamsInput"></a>

```python
linux_process_params_input: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---

##### `max_idle_time_in_seconds_input`<sup>Optional</sup> <a name="max_idle_time_in_seconds_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSecondsInput"></a>

```python
max_idle_time_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances_count_input`<sup>Optional</sup> <a name="max_instances_count_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCountInput"></a>

```python
max_instances_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_queue_size_input`<sup>Optional</sup> <a name="max_queue_size_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSizeInput"></a>

```python
max_queue_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pinned_input`<sup>Optional</sup> <a name="pinned_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinnedInput"></a>

```python
pinned_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `status_timeout_in_seconds_input`<sup>Optional</sup> <a name="status_timeout_in_seconds_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSecondsInput"></a>

```python
status_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `exec_args`<sup>Required</sup> <a name="exec_args" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs"></a>

```python
exec_args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_payload_encoding_type`<sup>Required</sup> <a name="input_payload_encoding_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType"></a>

```python
input_payload_encoding_type: str
```

- *Type:* str

---

##### `max_idle_time_in_seconds`<sup>Required</sup> <a name="max_idle_time_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds"></a>

```python
max_idle_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances_count`<sup>Required</sup> <a name="max_instances_count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount"></a>

```python
max_instances_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_queue_size`<sup>Required</sup> <a name="max_queue_size" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize"></a>

```python
max_queue_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned"></a>

```python
pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `status_timeout_in_seconds`<sup>Required</sup> <a name="status_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds"></a>

```python
status_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]

---


### Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>

---


### Greengrassv2ComponentVersionLambdaFunctionOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import greengrassv2_component_version

greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies">put_component_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters">put_component_lambda_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms">put_component_platforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentDependencies">reset_component_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentLambdaParameters">reset_component_lambda_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentName">reset_component_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentPlatforms">reset_component_platforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentVersion">reset_component_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_component_dependencies` <a name="put_component_dependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies"></a>

```python
def put_component_dependencies(
  value: IResolvable | typing.Mapping[Greengrassv2ComponentVersionLambdaFunctionComponentDependencies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]

---

##### `put_component_lambda_parameters` <a name="put_component_lambda_parameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters"></a>

```python
def put_component_lambda_parameters(
  environment_variables: typing.Mapping[str] = None,
  event_sources: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources] = None,
  exec_args: typing.List[str] = None,
  input_payload_encoding_type: str = None,
  linux_process_params: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams = None,
  max_idle_time_in_seconds: typing.Union[int, float] = None,
  max_instances_count: typing.Union[int, float] = None,
  max_queue_size: typing.Union[int, float] = None,
  pinned: bool | IResolvable = None,
  status_timeout_in_seconds: typing.Union[int, float] = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}.

---

###### `event_sources`<sup>Optional</sup> <a name="event_sources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.eventSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}.

---

###### `exec_args`<sup>Optional</sup> <a name="exec_args" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.execArgs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}.

---

###### `input_payload_encoding_type`<sup>Optional</sup> <a name="input_payload_encoding_type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.inputPayloadEncodingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}.

---

###### `linux_process_params`<sup>Optional</sup> <a name="linux_process_params" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.linuxProcessParams"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}.

---

###### `max_idle_time_in_seconds`<sup>Optional</sup> <a name="max_idle_time_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.maxIdleTimeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}.

---

###### `max_instances_count`<sup>Optional</sup> <a name="max_instances_count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.maxInstancesCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}.

---

###### `max_queue_size`<sup>Optional</sup> <a name="max_queue_size" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.maxQueueSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}.

---

###### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.pinned"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}.

---

###### `status_timeout_in_seconds`<sup>Optional</sup> <a name="status_timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.statusTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}.

---

##### `put_component_platforms` <a name="put_component_platforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms"></a>

```python
def put_component_platforms(
  value: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]

---

##### `reset_component_dependencies` <a name="reset_component_dependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentDependencies"></a>

```python
def reset_component_dependencies() -> None
```

##### `reset_component_lambda_parameters` <a name="reset_component_lambda_parameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentLambdaParameters"></a>

```python
def reset_component_lambda_parameters() -> None
```

##### `reset_component_name` <a name="reset_component_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentName"></a>

```python
def reset_component_name() -> None
```

##### `reset_component_platforms` <a name="reset_component_platforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentPlatforms"></a>

```python
def reset_component_platforms() -> None
```

##### `reset_component_version` <a name="reset_component_version" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentVersion"></a>

```python
def reset_component_version() -> None
```

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies">component_dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters">component_lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms">component_platforms</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependenciesInput">component_dependencies_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParametersInput">component_lambda_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentNameInput">component_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatformsInput">component_platforms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersionInput">component_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName">component_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion">component_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_dependencies`<sup>Required</sup> <a name="component_dependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies"></a>

```python
component_dependencies: Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a>

---

##### `component_lambda_parameters`<sup>Required</sup> <a name="component_lambda_parameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters"></a>

```python
component_lambda_parameters: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a>

---

##### `component_platforms`<sup>Required</sup> <a name="component_platforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms"></a>

```python
component_platforms: Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a>

---

##### `component_dependencies_input`<sup>Optional</sup> <a name="component_dependencies_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependenciesInput"></a>

```python
component_dependencies_input: IResolvable | typing.Mapping[Greengrassv2ComponentVersionLambdaFunctionComponentDependencies]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>]

---

##### `component_lambda_parameters_input`<sup>Optional</sup> <a name="component_lambda_parameters_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParametersInput"></a>

```python
component_lambda_parameters_input: IResolvable | Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---

##### `component_name_input`<sup>Optional</sup> <a name="component_name_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentNameInput"></a>

```python
component_name_input: str
```

- *Type:* str

---

##### `component_platforms_input`<sup>Optional</sup> <a name="component_platforms_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatformsInput"></a>

```python
component_platforms_input: IResolvable | typing.List[Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>]

---

##### `component_version_input`<sup>Optional</sup> <a name="component_version_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersionInput"></a>

```python
component_version_input: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `component_name`<sup>Required</sup> <a name="component_name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName"></a>

```python
component_name: str
```

- *Type:* str

---

##### `component_version`<sup>Required</sup> <a name="component_version" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion"></a>

```python
component_version: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Greengrassv2ComponentVersionLambdaFunction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---



