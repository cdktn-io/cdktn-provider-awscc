# `apptestTestCase` Submodule <a name="`apptestTestCase` Submodule" id="@cdktn/provider-awscc.apptestTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApptestTestCase <a name="ApptestTestCase" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case awscc_apptest_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCase(
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
  steps: IResolvable | typing.List[ApptestTestCaseSteps],
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.steps">steps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.steps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_steps` <a name="put_steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps"></a>

```python
def put_steps(
  value: IResolvable | typing.List[ApptestTestCaseSteps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApptestTestCase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApptestTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApptestTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion">latest_version</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn">test_case_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId">test_case_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion">test_case_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput">steps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion"></a>

```python
latest_version: ApptestTestCaseLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps"></a>

```python
steps: ApptestTestCaseStepsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a>

---

##### `test_case_arn`<sup>Required</sup> <a name="test_case_arn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn"></a>

```python
test_case_arn: str
```

- *Type:* str

---

##### `test_case_id`<sup>Required</sup> <a name="test_case_id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId"></a>

```python
test_case_id: str
```

- *Type:* str

---

##### `test_case_version`<sup>Required</sup> <a name="test_case_version" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion"></a>

```python
test_case_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput"></a>

```python
steps_input: IResolvable | typing.List[ApptestTestCaseSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApptestTestCaseConfig <a name="ApptestTestCaseConfig" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  steps: IResolvable | typing.List[ApptestTestCaseSteps],
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps">steps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps"></a>

```python
steps: IResolvable | typing.List[ApptestTestCaseSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}.

---

### ApptestTestCaseLatestVersion <a name="ApptestTestCaseLatestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseLatestVersion()
```


### ApptestTestCaseSteps <a name="ApptestTestCaseSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseSteps(
  action: ApptestTestCaseStepsAction,
  name: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action ApptestTestCase#action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action"></a>

```python
action: ApptestTestCaseStepsAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action ApptestTestCase#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

### ApptestTestCaseStepsAction <a name="ApptestTestCaseStepsAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsAction(
  compare_action: ApptestTestCaseStepsActionCompareAction = None,
  mainframe_action: ApptestTestCaseStepsActionMainframeAction = None,
  resource_action: ApptestTestCaseStepsActionResourceAction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction">compare_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction">mainframe_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction">resource_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}. |

---

##### `compare_action`<sup>Optional</sup> <a name="compare_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction"></a>

```python
compare_action: ApptestTestCaseStepsActionCompareAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}.

---

##### `mainframe_action`<sup>Optional</sup> <a name="mainframe_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction"></a>

```python
mainframe_action: ApptestTestCaseStepsActionMainframeAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}.

---

##### `resource_action`<sup>Optional</sup> <a name="resource_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction"></a>

```python
resource_action: ApptestTestCaseStepsActionResourceAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}.

---

### ApptestTestCaseStepsActionCompareAction <a name="ApptestTestCaseStepsActionCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareAction(
  input: ApptestTestCaseStepsActionCompareActionInput = None,
  output: ApptestTestCaseStepsActionCompareActionOutput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#input ApptestTestCase#input}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#output ApptestTestCase#output}. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input"></a>

```python
input: ApptestTestCaseStepsActionCompareActionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#input ApptestTestCase#input}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output"></a>

```python
output: ApptestTestCaseStepsActionCompareActionOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#output ApptestTestCase#output}.

---

### ApptestTestCaseStepsActionCompareActionInput <a name="ApptestTestCaseStepsActionCompareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInput(
  file: ApptestTestCaseStepsActionCompareActionInputFile = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file"></a>

```python
file: ApptestTestCaseStepsActionCompareActionInputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionInputFile <a name="ApptestTestCaseStepsActionCompareActionInputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile(
  file_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata = None,
  source_location: str = None,
  target_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation">source_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation">target_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}. |

---

##### `file_metadata`<sup>Optional</sup> <a name="file_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata"></a>

```python
file_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}.

---

##### `source_location`<sup>Optional</sup> <a name="source_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}.

---

##### `target_location`<sup>Optional</sup> <a name="target_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation"></a>

```python
target_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata(
  database_cdc: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc = None,
  data_sets: IResolvable | typing.List[ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc">database_cdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets">data_sets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}. |

---

##### `database_cdc`<sup>Optional</sup> <a name="database_cdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc"></a>

```python
database_cdc: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}.

---

##### `data_sets`<sup>Optional</sup> <a name="data_sets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets"></a>

```python
data_sets: IResolvable | typing.List[ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc(
  source_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata = None,
  target_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata">target_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}. |

---

##### `source_metadata`<sup>Optional</sup> <a name="source_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata"></a>

```python
source_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}.

---

##### `target_metadata`<sup>Optional</sup> <a name="target_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata"></a>

```python
target_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata(
  capture_tool: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool">capture_tool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `capture_tool`<sup>Optional</sup> <a name="capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool"></a>

```python
capture_tool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata(
  capture_tool: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool">capture_tool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `capture_tool`<sup>Optional</sup> <a name="capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool"></a>

```python
capture_tool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets(
  ccsid: str = None,
  format: str = None,
  length: typing.Union[int, float] = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid">ccsid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#format ApptestTestCase#format}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length">length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#length ApptestTestCase#length}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `ccsid`<sup>Optional</sup> <a name="ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid"></a>

```python
ccsid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#format ApptestTestCase#format}.

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#length ApptestTestCase#length}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionOutput <a name="ApptestTestCaseStepsActionCompareActionOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput(
  file: ApptestTestCaseStepsActionCompareActionOutputFile = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file"></a>

```python
file: ApptestTestCaseStepsActionCompareActionOutputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionOutputFile <a name="ApptestTestCaseStepsActionCompareActionOutputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile(
  file_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation">file_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}. |

---

##### `file_location`<sup>Optional</sup> <a name="file_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation"></a>

```python
file_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}.

---

### ApptestTestCaseStepsActionMainframeAction <a name="ApptestTestCaseStepsActionMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeAction(
  action_type: ApptestTestCaseStepsActionMainframeActionActionType = None,
  properties: ApptestTestCaseStepsActionMainframeActionProperties = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType">action_type</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType"></a>

```python
action_type: ApptestTestCaseStepsActionMainframeActionActionType
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties"></a>

```python
properties: ApptestTestCaseStepsActionMainframeActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionMainframeActionActionType <a name="ApptestTestCaseStepsActionMainframeActionActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType(
  batch: ApptestTestCaseStepsActionMainframeActionActionTypeBatch = None,
  tn3270: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270">tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch"></a>

```python
batch: ApptestTestCaseStepsActionMainframeActionActionTypeBatch
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}.

---

##### `tn3270`<sup>Optional</sup> <a name="tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270"></a>

```python
tn3270: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeBatch <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch(
  batch_job_name: str = None,
  batch_job_parameters: typing.Mapping[str] = None,
  export_data_set_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName">batch_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters">batch_job_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames">export_data_set_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |

---

##### `batch_job_name`<sup>Optional</sup> <a name="batch_job_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName"></a>

```python
batch_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}.

---

##### `batch_job_parameters`<sup>Optional</sup> <a name="batch_job_parameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters"></a>

```python
batch_job_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}.

---

##### `export_data_set_names`<sup>Optional</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames"></a>

```python
export_data_set_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270(
  export_data_set_names: typing.List[str] = None,
  script: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames">export_data_set_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script">script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script ApptestTestCase#script}. |

---

##### `export_data_set_names`<sup>Optional</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames"></a>

```python
export_data_set_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script"></a>

```python
script: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script ApptestTestCase#script}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script(
  script_location: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation">script_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `script_location`<sup>Optional</sup> <a name="script_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionMainframeActionProperties <a name="ApptestTestCaseStepsActionMainframeActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties(
  dms_task_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn">dms_task_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}. |

---

##### `dms_task_arn`<sup>Optional</sup> <a name="dms_task_arn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn"></a>

```python
dms_task_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}.

---

### ApptestTestCaseStepsActionResourceAction <a name="ApptestTestCaseStepsActionResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceAction(
  cloudformation_action: ApptestTestCaseStepsActionResourceActionCloudformationAction = None,
  m2_managed_application_action: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction = None,
  m2_non_managed_application_action: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction">cloudformation_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction">m2_managed_application_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction">m2_non_managed_application_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}. |

---

##### `cloudformation_action`<sup>Optional</sup> <a name="cloudformation_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction"></a>

```python
cloudformation_action: ApptestTestCaseStepsActionResourceActionCloudformationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}.

---

##### `m2_managed_application_action`<sup>Optional</sup> <a name="m2_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction"></a>

```python
m2_managed_application_action: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}.

---

##### `m2_non_managed_application_action`<sup>Optional</sup> <a name="m2_non_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction"></a>

```python
m2_non_managed_application_action: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}.

---

### ApptestTestCaseStepsActionResourceActionCloudformationAction <a name="ApptestTestCaseStepsActionResourceActionCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction(
  action_type: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction(
  action_type: str = None,
  properties: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties"></a>

```python
properties: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties(
  force_stop: bool | IResolvable = None,
  import_data_set_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop">force_stop</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation">import_data_set_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}. |

---

##### `force_stop`<sup>Optional</sup> <a name="force_stop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop"></a>

```python
force_stop: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}.

---

##### `import_data_set_location`<sup>Optional</sup> <a name="import_data_set_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation"></a>

```python
import_data_set_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}.

---

### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction(
  action_type: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApptestTestCaseLatestVersionOutputReference <a name="ApptestTestCaseLatestVersionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseLatestVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue"></a>

```python
internal_value: ApptestTestCaseLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata">put_source_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata">put_target_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata">reset_source_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata">reset_target_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_metadata` <a name="put_source_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata"></a>

```python
def put_source_metadata(
  capture_tool: str = None,
  type: str = None
) -> None
```

###### `capture_tool`<sup>Optional</sup> <a name="capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata.parameter.captureTool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

##### `put_target_metadata` <a name="put_target_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata"></a>

```python
def put_target_metadata(
  capture_tool: str = None,
  type: str = None
) -> None
```

###### `capture_tool`<sup>Optional</sup> <a name="capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata.parameter.captureTool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

##### `reset_source_metadata` <a name="reset_source_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata"></a>

```python
def reset_source_metadata() -> None
```

##### `reset_target_metadata` <a name="reset_target_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata"></a>

```python
def reset_target_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata">target_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput">source_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput">target_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_metadata`<sup>Required</sup> <a name="source_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata"></a>

```python
source_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a>

---

##### `target_metadata`<sup>Required</sup> <a name="target_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata"></a>

```python
target_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a>

---

##### `source_metadata_input`<sup>Optional</sup> <a name="source_metadata_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput"></a>

```python
source_metadata_input: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---

##### `target_metadata_input`<sup>Optional</sup> <a name="target_metadata_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput"></a>

```python
target_metadata_input: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool">reset_capture_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capture_tool` <a name="reset_capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool"></a>

```python
def reset_capture_tool() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput">capture_tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool">capture_tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_tool_input`<sup>Optional</sup> <a name="capture_tool_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput"></a>

```python
capture_tool_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `capture_tool`<sup>Required</sup> <a name="capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool"></a>

```python
capture_tool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool">reset_capture_tool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capture_tool` <a name="reset_capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool"></a>

```python
def reset_capture_tool() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput">capture_tool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool">capture_tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_tool_input`<sup>Optional</sup> <a name="capture_tool_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput"></a>

```python
capture_tool_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `capture_tool`<sup>Required</sup> <a name="capture_tool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool"></a>

```python
capture_tool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid">reset_ccsid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength">reset_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ccsid` <a name="reset_ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid"></a>

```python
def reset_ccsid() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_length` <a name="reset_length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength"></a>

```python
def reset_length() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput">ccsid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid">ccsid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ccsid_input`<sup>Optional</sup> <a name="ccsid_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput"></a>

```python
ccsid_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ccsid`<sup>Required</sup> <a name="ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid"></a>

```python
ccsid: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc">put_database_cdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets">put_data_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc">reset_database_cdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets">reset_data_sets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database_cdc` <a name="put_database_cdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc"></a>

```python
def put_database_cdc(
  source_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata = None,
  target_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata = None
) -> None
```

###### `source_metadata`<sup>Optional</sup> <a name="source_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc.parameter.sourceMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}.

---

###### `target_metadata`<sup>Optional</sup> <a name="target_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc.parameter.targetMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}.

---

##### `put_data_sets` <a name="put_data_sets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets"></a>

```python
def put_data_sets(
  value: IResolvable | typing.List[ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]

---

##### `reset_database_cdc` <a name="reset_database_cdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc"></a>

```python
def reset_database_cdc() -> None
```

##### `reset_data_sets` <a name="reset_data_sets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets"></a>

```python
def reset_data_sets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc">database_cdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets">data_sets</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput">database_cdc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput">data_sets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_cdc`<sup>Required</sup> <a name="database_cdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc"></a>

```python
database_cdc: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a>

---

##### `data_sets`<sup>Required</sup> <a name="data_sets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets"></a>

```python
data_sets: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a>

---

##### `database_cdc_input`<sup>Optional</sup> <a name="database_cdc_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput"></a>

```python
database_cdc_input: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---

##### `data_sets_input`<sup>Optional</sup> <a name="data_sets_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput"></a>

```python
data_sets_input: IResolvable | typing.List[ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata">put_file_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata">reset_file_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation">reset_source_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation">reset_target_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file_metadata` <a name="put_file_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata"></a>

```python
def put_file_metadata(
  database_cdc: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc = None,
  data_sets: IResolvable | typing.List[ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets] = None
) -> None
```

###### `database_cdc`<sup>Optional</sup> <a name="database_cdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata.parameter.databaseCdc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}.

---

###### `data_sets`<sup>Optional</sup> <a name="data_sets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata.parameter.dataSets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}.

---

##### `reset_file_metadata` <a name="reset_file_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata"></a>

```python
def reset_file_metadata() -> None
```

##### `reset_source_location` <a name="reset_source_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation"></a>

```python
def reset_source_location() -> None
```

##### `reset_target_location` <a name="reset_target_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation"></a>

```python
def reset_target_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput">file_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput">source_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput">target_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation">source_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation">target_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_metadata`<sup>Required</sup> <a name="file_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata"></a>

```python
file_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a>

---

##### `file_metadata_input`<sup>Optional</sup> <a name="file_metadata_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput"></a>

```python
file_metadata_input: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---

##### `source_location_input`<sup>Optional</sup> <a name="source_location_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput"></a>

```python
source_location_input: str
```

- *Type:* str

---

##### `target_location_input`<sup>Optional</sup> <a name="target_location_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput"></a>

```python
target_location_input: str
```

- *Type:* str

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

---

##### `target_location`<sup>Required</sup> <a name="target_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation"></a>

```python
target_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---


### ApptestTestCaseStepsActionCompareActionInputOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile">reset_file</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile"></a>

```python
def put_file(
  file_metadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata = None,
  source_location: str = None,
  target_location: str = None
) -> None
```

###### `file_metadata`<sup>Optional</sup> <a name="file_metadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile.parameter.fileMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}.

---

###### `source_location`<sup>Optional</sup> <a name="source_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile.parameter.sourceLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}.

---

###### `target_location`<sup>Optional</sup> <a name="target_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile.parameter.targetLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}.

---

##### `reset_file` <a name="reset_file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile"></a>

```python
def reset_file() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput">file_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file"></a>

```python
file: ApptestTestCaseStepsActionCompareActionInputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput"></a>

```python
file_input: IResolvable | ApptestTestCaseStepsActionCompareActionInputFile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---


### ApptestTestCaseStepsActionCompareActionOutputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation">reset_file_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_location` <a name="reset_file_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation"></a>

```python
def reset_file_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput">file_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation">file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_location_input`<sup>Optional</sup> <a name="file_location_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput"></a>

```python
file_location_input: str
```

- *Type:* str

---

##### `file_location`<sup>Required</sup> <a name="file_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation"></a>

```python
file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionOutputFile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---


### ApptestTestCaseStepsActionCompareActionOutputOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile">put_file</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile">reset_file</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_file` <a name="put_file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile"></a>

```python
def put_file(
  file_location: str = None
) -> None
```

###### `file_location`<sup>Optional</sup> <a name="file_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile.parameter.fileLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}.

---

##### `reset_file` <a name="reset_file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile"></a>

```python
def reset_file() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput">file_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file"></a>

```python
file: ApptestTestCaseStepsActionCompareActionOutputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a>

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput"></a>

```python
file_input: IResolvable | ApptestTestCaseStepsActionCompareActionOutputFile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareActionOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---


### ApptestTestCaseStepsActionCompareActionOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput">reset_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput"></a>

```python
def put_input(
  file: ApptestTestCaseStepsActionCompareActionInputFile = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput.parameter.file"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

##### `put_output` <a name="put_output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput"></a>

```python
def put_output(
  file: ApptestTestCaseStepsActionCompareActionOutputFile = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput.parameter.file"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

##### `reset_input` <a name="reset_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput">input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput">output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input"></a>

```python
input: ApptestTestCaseStepsActionCompareActionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output"></a>

```python
output: ApptestTestCaseStepsActionCompareActionOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput"></a>

```python
input_input: IResolvable | ApptestTestCaseStepsActionCompareActionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput"></a>

```python
output_input: IResolvable | ApptestTestCaseStepsActionCompareActionOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionCompareAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName">reset_batch_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters">reset_batch_job_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames">reset_export_data_set_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_job_name` <a name="reset_batch_job_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName"></a>

```python
def reset_batch_job_name() -> None
```

##### `reset_batch_job_parameters` <a name="reset_batch_job_parameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters"></a>

```python
def reset_batch_job_parameters() -> None
```

##### `reset_export_data_set_names` <a name="reset_export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames"></a>

```python
def reset_export_data_set_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput">batch_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput">batch_job_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput">export_data_set_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName">batch_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters">batch_job_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames">export_data_set_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_job_name_input`<sup>Optional</sup> <a name="batch_job_name_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput"></a>

```python
batch_job_name_input: str
```

- *Type:* str

---

##### `batch_job_parameters_input`<sup>Optional</sup> <a name="batch_job_parameters_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput"></a>

```python
batch_job_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `export_data_set_names_input`<sup>Optional</sup> <a name="export_data_set_names_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput"></a>

```python
export_data_set_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `batch_job_name`<sup>Required</sup> <a name="batch_job_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName"></a>

```python
batch_job_name: str
```

- *Type:* str

---

##### `batch_job_parameters`<sup>Required</sup> <a name="batch_job_parameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters"></a>

```python
batch_job_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `export_data_set_names`<sup>Required</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames"></a>

```python
export_data_set_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeBatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch">put_batch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270">put_tn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch">reset_batch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270">reset_tn3270</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch` <a name="put_batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch"></a>

```python
def put_batch(
  batch_job_name: str = None,
  batch_job_parameters: typing.Mapping[str] = None,
  export_data_set_names: typing.List[str] = None
) -> None
```

###### `batch_job_name`<sup>Optional</sup> <a name="batch_job_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch.parameter.batchJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}.

---

###### `batch_job_parameters`<sup>Optional</sup> <a name="batch_job_parameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch.parameter.batchJobParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}.

---

###### `export_data_set_names`<sup>Optional</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch.parameter.exportDataSetNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

##### `put_tn3270` <a name="put_tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270"></a>

```python
def put_tn3270(
  export_data_set_names: typing.List[str] = None,
  script: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script = None
) -> None
```

###### `export_data_set_names`<sup>Optional</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270.parameter.exportDataSetNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

###### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270.parameter.script"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script ApptestTestCase#script}.

---

##### `reset_batch` <a name="reset_batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch"></a>

```python
def reset_batch() -> None
```

##### `reset_tn3270` <a name="reset_tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270"></a>

```python
def reset_tn3270() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270">tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput">batch_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input">tn3270_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch"></a>

```python
batch: ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a>

---

##### `tn3270`<sup>Required</sup> <a name="tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270"></a>

```python
tn3270: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a>

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput"></a>

```python
batch_input: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeBatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---

##### `tn3270_input`<sup>Optional</sup> <a name="tn3270_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input"></a>

```python
tn3270_input: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionMainframeActionActionType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript">put_script</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames">reset_export_data_set_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript">reset_script</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script` <a name="put_script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript"></a>

```python
def put_script(
  script_location: str = None,
  type: str = None
) -> None
```

###### `script_location`<sup>Optional</sup> <a name="script_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript.parameter.scriptLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

##### `reset_export_data_set_names` <a name="reset_export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames"></a>

```python
def reset_export_data_set_names() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript"></a>

```python
def reset_script() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script">script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput">export_data_set_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput">script_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames">export_data_set_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script"></a>

```python
script: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a>

---

##### `export_data_set_names_input`<sup>Optional</sup> <a name="export_data_set_names_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput"></a>

```python
export_data_set_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput"></a>

```python
script_input: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---

##### `export_data_set_names`<sup>Required</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames"></a>

```python
export_data_set_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation">reset_script_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_script_location` <a name="reset_script_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation"></a>

```python
def reset_script_location() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput">script_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation">script_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_location_input`<sup>Optional</sup> <a name="script_location_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput"></a>

```python
script_location_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `script_location`<sup>Required</sup> <a name="script_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---


### ApptestTestCaseStepsActionMainframeActionOutputReference <a name="ApptestTestCaseStepsActionMainframeActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType">put_action_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action_type` <a name="put_action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType"></a>

```python
def put_action_type(
  batch: ApptestTestCaseStepsActionMainframeActionActionTypeBatch = None,
  tn3270: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 = None
) -> None
```

###### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType.parameter.batch"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}.

---

###### `tn3270`<sup>Optional</sup> <a name="tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType.parameter.tn3270"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}.

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties"></a>

```python
def put_properties(
  dms_task_arn: str = None
) -> None
```

###### `dms_task_arn`<sup>Optional</sup> <a name="dms_task_arn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties.parameter.dmsTaskArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}.

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType">action_type</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType"></a>

```python
action_type: ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties"></a>

```python
properties: ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput"></a>

```python
action_type_input: IResolvable | ApptestTestCaseStepsActionMainframeActionActionType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput"></a>

```python
properties_input: IResolvable | ApptestTestCaseStepsActionMainframeActionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionMainframeAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---


### ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn">reset_dms_task_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dms_task_arn` <a name="reset_dms_task_arn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn"></a>

```python
def reset_dms_task_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput">dms_task_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn">dms_task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dms_task_arn_input`<sup>Optional</sup> <a name="dms_task_arn_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput"></a>

```python
dms_task_arn_input: str
```

- *Type:* str

---

##### `dms_task_arn`<sup>Required</sup> <a name="dms_task_arn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn"></a>

```python
dms_task_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionMainframeActionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---


### ApptestTestCaseStepsActionOutputReference <a name="ApptestTestCaseStepsActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction">put_compare_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction">put_mainframe_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction">put_resource_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction">reset_compare_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction">reset_mainframe_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction">reset_resource_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compare_action` <a name="put_compare_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction"></a>

```python
def put_compare_action(
  input: ApptestTestCaseStepsActionCompareActionInput = None,
  output: ApptestTestCaseStepsActionCompareActionOutput = None
) -> None
```

###### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction.parameter.input"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#input ApptestTestCase#input}.

---

###### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction.parameter.output"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#output ApptestTestCase#output}.

---

##### `put_mainframe_action` <a name="put_mainframe_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction"></a>

```python
def put_mainframe_action(
  action_type: ApptestTestCaseStepsActionMainframeActionActionType = None,
  properties: ApptestTestCaseStepsActionMainframeActionProperties = None,
  resource: str = None
) -> None
```

###### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction.parameter.actionType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

##### `put_resource_action` <a name="put_resource_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction"></a>

```python
def put_resource_action(
  cloudformation_action: ApptestTestCaseStepsActionResourceActionCloudformationAction = None,
  m2_managed_application_action: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction = None,
  m2_non_managed_application_action: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction = None
) -> None
```

###### `cloudformation_action`<sup>Optional</sup> <a name="cloudformation_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction.parameter.cloudformationAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}.

---

###### `m2_managed_application_action`<sup>Optional</sup> <a name="m2_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction.parameter.m2ManagedApplicationAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}.

---

###### `m2_non_managed_application_action`<sup>Optional</sup> <a name="m2_non_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction.parameter.m2NonManagedApplicationAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}.

---

##### `reset_compare_action` <a name="reset_compare_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction"></a>

```python
def reset_compare_action() -> None
```

##### `reset_mainframe_action` <a name="reset_mainframe_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction"></a>

```python
def reset_mainframe_action() -> None
```

##### `reset_resource_action` <a name="reset_resource_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction"></a>

```python
def reset_resource_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction">compare_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction">mainframe_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction">resource_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput">compare_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput">mainframe_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput">resource_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compare_action`<sup>Required</sup> <a name="compare_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction"></a>

```python
compare_action: ApptestTestCaseStepsActionCompareActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a>

---

##### `mainframe_action`<sup>Required</sup> <a name="mainframe_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction"></a>

```python
mainframe_action: ApptestTestCaseStepsActionMainframeActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a>

---

##### `resource_action`<sup>Required</sup> <a name="resource_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction"></a>

```python
resource_action: ApptestTestCaseStepsActionResourceActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a>

---

##### `compare_action_input`<sup>Optional</sup> <a name="compare_action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput"></a>

```python
compare_action_input: IResolvable | ApptestTestCaseStepsActionCompareAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---

##### `mainframe_action_input`<sup>Optional</sup> <a name="mainframe_action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput"></a>

```python
mainframe_action_input: IResolvable | ApptestTestCaseStepsActionMainframeAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---

##### `resource_action_input`<sup>Optional</sup> <a name="resource_action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput"></a>

```python
resource_action_input: IResolvable | ApptestTestCaseStepsActionResourceAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---


### ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_type` <a name="reset_action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionResourceActionCloudformationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_properties` <a name="put_properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties"></a>

```python
def put_properties(
  force_stop: bool | IResolvable = None,
  import_data_set_location: str = None
) -> None
```

###### `force_stop`<sup>Optional</sup> <a name="force_stop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties.parameter.forceStop"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}.

---

###### `import_data_set_location`<sup>Optional</sup> <a name="import_data_set_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties.parameter.importDataSetLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}.

---

##### `reset_action_type` <a name="reset_action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties"></a>

```python
properties: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput"></a>

```python
properties_input: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop">reset_force_stop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation">reset_import_data_set_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_force_stop` <a name="reset_force_stop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop"></a>

```python
def reset_force_stop() -> None
```

##### `reset_import_data_set_location` <a name="reset_import_data_set_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation"></a>

```python
def reset_import_data_set_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput">force_stop_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput">import_data_set_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop">force_stop</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation">import_data_set_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `force_stop_input`<sup>Optional</sup> <a name="force_stop_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput"></a>

```python
force_stop_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `import_data_set_location_input`<sup>Optional</sup> <a name="import_data_set_location_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput"></a>

```python
import_data_set_location_input: str
```

- *Type:* str

---

##### `force_stop`<sup>Required</sup> <a name="force_stop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop"></a>

```python
force_stop: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `import_data_set_location`<sup>Required</sup> <a name="import_data_set_location" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation"></a>

```python
import_data_set_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---


### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType">reset_action_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_type` <a name="reset_action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType"></a>

```python
def reset_action_type() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---


### ApptestTestCaseStepsActionResourceActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction">put_cloudformation_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction">put_m2_managed_application_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction">put_m2_non_managed_application_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction">reset_cloudformation_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction">reset_m2_managed_application_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction">reset_m2_non_managed_application_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudformation_action` <a name="put_cloudformation_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction"></a>

```python
def put_cloudformation_action(
  action_type: str = None,
  resource: str = None
) -> None
```

###### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

##### `put_m2_managed_application_action` <a name="put_m2_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction"></a>

```python
def put_m2_managed_application_action(
  action_type: str = None,
  properties: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties = None,
  resource: str = None
) -> None
```

###### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

##### `put_m2_non_managed_application_action` <a name="put_m2_non_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction"></a>

```python
def put_m2_non_managed_application_action(
  action_type: str = None,
  resource: str = None
) -> None
```

###### `action_type`<sup>Optional</sup> <a name="action_type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

##### `reset_cloudformation_action` <a name="reset_cloudformation_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction"></a>

```python
def reset_cloudformation_action() -> None
```

##### `reset_m2_managed_application_action` <a name="reset_m2_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction"></a>

```python
def reset_m2_managed_application_action() -> None
```

##### `reset_m2_non_managed_application_action` <a name="reset_m2_non_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction"></a>

```python
def reset_m2_non_managed_application_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction">cloudformation_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction">m2_managed_application_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction">m2_non_managed_application_action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput">cloudformation_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput">m2_managed_application_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput">m2_non_managed_application_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudformation_action`<sup>Required</sup> <a name="cloudformation_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction"></a>

```python
cloudformation_action: ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a>

---

##### `m2_managed_application_action`<sup>Required</sup> <a name="m2_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction"></a>

```python
m2_managed_application_action: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a>

---

##### `m2_non_managed_application_action`<sup>Required</sup> <a name="m2_non_managed_application_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction"></a>

```python
m2_non_managed_application_action: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a>

---

##### `cloudformation_action_input`<sup>Optional</sup> <a name="cloudformation_action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput"></a>

```python
cloudformation_action_input: IResolvable | ApptestTestCaseStepsActionResourceActionCloudformationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---

##### `m2_managed_application_action_input`<sup>Optional</sup> <a name="m2_managed_application_action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput"></a>

```python
m2_managed_application_action_input: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---

##### `m2_non_managed_application_action_input`<sup>Optional</sup> <a name="m2_non_managed_application_action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput"></a>

```python
m2_non_managed_application_action_input: IResolvable | ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseStepsActionResourceAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---


### ApptestTestCaseStepsList <a name="ApptestTestCaseStepsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApptestTestCaseStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApptestTestCaseSteps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>]

---


### ApptestTestCaseStepsOutputReference <a name="ApptestTestCaseStepsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apptest_test_case

apptestTestCase.ApptestTestCaseStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction"></a>

```python
def put_action(
  compare_action: ApptestTestCaseStepsActionCompareAction = None,
  mainframe_action: ApptestTestCaseStepsActionMainframeAction = None,
  resource_action: ApptestTestCaseStepsActionResourceAction = None
) -> None
```

###### `compare_action`<sup>Optional</sup> <a name="compare_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction.parameter.compareAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}.

---

###### `mainframe_action`<sup>Optional</sup> <a name="mainframe_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction.parameter.mainframeAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}.

---

###### `resource_action`<sup>Optional</sup> <a name="resource_action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction.parameter.resourceAction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput">action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action"></a>

```python
action: ApptestTestCaseStepsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput"></a>

```python
action_input: IResolvable | ApptestTestCaseStepsAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApptestTestCaseSteps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>

---



