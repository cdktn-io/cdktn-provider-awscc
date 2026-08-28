# `connectTestCase` Submodule <a name="`connectTestCase` Submodule" id="@cdktn/provider-awscc.connectTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTestCase <a name="ConnectTestCase" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case awscc_connect_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCase(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  instance_arn: str,
  name: str,
  description: str = None,
  entry_point: ConnectTestCaseEntryPoint = None,
  initialization_data: str = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectTestCaseTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.content">content</a></code> | <code>str</code> | The content of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.entryPoint">entry_point</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | Entry point for Testcase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.initializationData">initialization_data</a></code> | <code>str</code> | The initialization data of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]</code> | One or more tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.content"></a>

- *Type:* str

The content of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#content ConnectTestCase#content}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.name"></a>

- *Type:* str

The name of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#name ConnectTestCase#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.description"></a>

- *Type:* str

The description of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#description ConnectTestCase#description}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.entryPoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

Entry point for Testcase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}

---

##### `initialization_data`<sup>Optional</sup> <a name="initialization_data" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.initializationData"></a>

- *Type:* str

The initialization data of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.status"></a>

- *Type:* str

The status of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#status ConnectTestCase#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint">put_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData">reset_initialization_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entry_point` <a name="put_entry_point" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint"></a>

```python
def put_entry_point(
  chat_entry_point_parameters: ConnectTestCaseEntryPointChatEntryPointParameters = None,
  type: str = None,
  voice_call_entry_point_parameters: ConnectTestCaseEntryPointVoiceCallEntryPointParameters = None
) -> None
```

###### `chat_entry_point_parameters`<sup>Optional</sup> <a name="chat_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint.parameter.chatEntryPointParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

The chat entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#chat_entry_point_parameters ConnectTestCase#chat_entry_point_parameters}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint.parameter.type"></a>

- *Type:* str

The type of the Entry Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#type ConnectTestCase#type}

---

###### `voice_call_entry_point_parameters`<sup>Optional</sup> <a name="voice_call_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint.parameter.voiceCallEntryPointParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

The voice call entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#voice_call_entry_point_parameters ConnectTestCase#voice_call_entry_point_parameters}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectTestCaseTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_initialization_data` <a name="reset_initialization_data" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData"></a>

```python
def reset_initialization_data() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectTestCase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint">entry_point</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn">test_case_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput">entry_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput">initialization_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData">initialization_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint"></a>

```python
entry_point: ConnectTestCaseEntryPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags"></a>

```python
tags: ConnectTestCaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a>

---

##### `test_case_arn`<sup>Required</sup> <a name="test_case_arn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn"></a>

```python
test_case_arn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput"></a>

```python
entry_point_input: IResolvable | ConnectTestCaseEntryPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `initialization_data_input`<sup>Optional</sup> <a name="initialization_data_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput"></a>

```python
initialization_data_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectTestCaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `initialization_data`<sup>Required</sup> <a name="initialization_data" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData"></a>

```python
initialization_data: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTestCaseConfig <a name="ConnectTestCaseConfig" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  instance_arn: str,
  name: str,
  description: str = None,
  entry_point: ConnectTestCaseEntryPoint = None,
  initialization_data: str = None,
  status: str = None,
  tags: IResolvable | typing.List[ConnectTestCaseTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content">content</a></code> | <code>str</code> | The content of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name">name</a></code> | <code>str</code> | The name of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description">description</a></code> | <code>str</code> | The description of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint">entry_point</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | Entry point for Testcase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData">initialization_data</a></code> | <code>str</code> | The initialization data of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status">status</a></code> | <code>str</code> | The status of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#content ConnectTestCase#content}

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#name ConnectTestCase#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#description ConnectTestCase#description}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint"></a>

```python
entry_point: ConnectTestCaseEntryPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

Entry point for Testcase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}

---

##### `initialization_data`<sup>Optional</sup> <a name="initialization_data" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData"></a>

```python
initialization_data: str
```

- *Type:* str

The initialization data of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#status ConnectTestCase#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectTestCaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}

---

### ConnectTestCaseEntryPoint <a name="ConnectTestCaseEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseEntryPoint(
  chat_entry_point_parameters: ConnectTestCaseEntryPointChatEntryPointParameters = None,
  type: str = None,
  voice_call_entry_point_parameters: ConnectTestCaseEntryPointVoiceCallEntryPointParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters">chat_entry_point_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | The chat entry point parameters for the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type">type</a></code> | <code>str</code> | The type of the Entry Point. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters">voice_call_entry_point_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | The voice call entry point parameters for the test case. |

---

##### `chat_entry_point_parameters`<sup>Optional</sup> <a name="chat_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters"></a>

```python
chat_entry_point_parameters: ConnectTestCaseEntryPointChatEntryPointParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

The chat entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#chat_entry_point_parameters ConnectTestCase#chat_entry_point_parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the Entry Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#type ConnectTestCase#type}

---

##### `voice_call_entry_point_parameters`<sup>Optional</sup> <a name="voice_call_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters"></a>

```python
voice_call_entry_point_parameters: ConnectTestCaseEntryPointVoiceCallEntryPointParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

The voice call entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#voice_call_entry_point_parameters ConnectTestCase#voice_call_entry_point_parameters}

---

### ConnectTestCaseEntryPointChatEntryPointParameters <a name="ConnectTestCaseEntryPointChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters(
  flow_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId">flow_id</a></code> | <code>str</code> | The flow id used for the TestCase. |

---

##### `flow_id`<sup>Optional</sup> <a name="flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

### ConnectTestCaseEntryPointVoiceCallEntryPointParameters <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters(
  destination_phone_number: str = None,
  flow_id: str = None,
  source_phone_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber">destination_phone_number</a></code> | <code>str</code> | The destination phonenumber of the EntryPoint. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId">flow_id</a></code> | <code>str</code> | The flow id used for the TestCase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber">source_phone_number</a></code> | <code>str</code> | The source phonenumber of the EntryPoint. |

---

##### `destination_phone_number`<sup>Optional</sup> <a name="destination_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber"></a>

```python
destination_phone_number: str
```

- *Type:* str

The destination phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#destination_phone_number ConnectTestCase#destination_phone_number}

---

##### `flow_id`<sup>Optional</sup> <a name="flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

##### `source_phone_number`<sup>Optional</sup> <a name="source_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber"></a>

```python
source_phone_number: str
```

- *Type:* str

The source phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#source_phone_number ConnectTestCase#source_phone_number}

---

### ConnectTestCaseTags <a name="ConnectTestCaseTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#key ConnectTestCase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#value ConnectTestCase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTestCaseEntryPointChatEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointChatEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId">reset_flow_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flow_id` <a name="reset_flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId"></a>

```python
def reset_flow_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput">flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId">flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_id_input`<sup>Optional</sup> <a name="flow_id_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput"></a>

```python
flow_id_input: str
```

- *Type:* str

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTestCaseEntryPointChatEntryPointParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---


### ConnectTestCaseEntryPointOutputReference <a name="ConnectTestCaseEntryPointOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseEntryPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters">put_chat_entry_point_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters">put_voice_call_entry_point_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters">reset_chat_entry_point_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters">reset_voice_call_entry_point_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chat_entry_point_parameters` <a name="put_chat_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters"></a>

```python
def put_chat_entry_point_parameters(
  flow_id: str = None
) -> None
```

###### `flow_id`<sup>Optional</sup> <a name="flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters.parameter.flowId"></a>

- *Type:* str

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

##### `put_voice_call_entry_point_parameters` <a name="put_voice_call_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters"></a>

```python
def put_voice_call_entry_point_parameters(
  destination_phone_number: str = None,
  flow_id: str = None,
  source_phone_number: str = None
) -> None
```

###### `destination_phone_number`<sup>Optional</sup> <a name="destination_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters.parameter.destinationPhoneNumber"></a>

- *Type:* str

The destination phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#destination_phone_number ConnectTestCase#destination_phone_number}

---

###### `flow_id`<sup>Optional</sup> <a name="flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters.parameter.flowId"></a>

- *Type:* str

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

###### `source_phone_number`<sup>Optional</sup> <a name="source_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters.parameter.sourcePhoneNumber"></a>

- *Type:* str

The source phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_test_case#source_phone_number ConnectTestCase#source_phone_number}

---

##### `reset_chat_entry_point_parameters` <a name="reset_chat_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters"></a>

```python
def reset_chat_entry_point_parameters() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_voice_call_entry_point_parameters` <a name="reset_voice_call_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters"></a>

```python
def reset_voice_call_entry_point_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters">chat_entry_point_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters">voice_call_entry_point_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput">chat_entry_point_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput">voice_call_entry_point_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chat_entry_point_parameters`<sup>Required</sup> <a name="chat_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters"></a>

```python
chat_entry_point_parameters: ConnectTestCaseEntryPointChatEntryPointParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a>

---

##### `voice_call_entry_point_parameters`<sup>Required</sup> <a name="voice_call_entry_point_parameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters"></a>

```python
voice_call_entry_point_parameters: ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a>

---

##### `chat_entry_point_parameters_input`<sup>Optional</sup> <a name="chat_entry_point_parameters_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput"></a>

```python
chat_entry_point_parameters_input: IResolvable | ConnectTestCaseEntryPointChatEntryPointParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `voice_call_entry_point_parameters_input`<sup>Optional</sup> <a name="voice_call_entry_point_parameters_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput"></a>

```python
voice_call_entry_point_parameters_input: IResolvable | ConnectTestCaseEntryPointVoiceCallEntryPointParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTestCaseEntryPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---


### ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber">reset_destination_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId">reset_flow_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber">reset_source_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_phone_number` <a name="reset_destination_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber"></a>

```python
def reset_destination_phone_number() -> None
```

##### `reset_flow_id` <a name="reset_flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId"></a>

```python
def reset_flow_id() -> None
```

##### `reset_source_phone_number` <a name="reset_source_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber"></a>

```python
def reset_source_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput">destination_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput">flow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput">source_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber">destination_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId">flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber">source_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_phone_number_input`<sup>Optional</sup> <a name="destination_phone_number_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput"></a>

```python
destination_phone_number_input: str
```

- *Type:* str

---

##### `flow_id_input`<sup>Optional</sup> <a name="flow_id_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput"></a>

```python
flow_id_input: str
```

- *Type:* str

---

##### `source_phone_number_input`<sup>Optional</sup> <a name="source_phone_number_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput"></a>

```python
source_phone_number_input: str
```

- *Type:* str

---

##### `destination_phone_number`<sup>Required</sup> <a name="destination_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber"></a>

```python
destination_phone_number: str
```

- *Type:* str

---

##### `flow_id`<sup>Required</sup> <a name="flow_id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId"></a>

```python
flow_id: str
```

- *Type:* str

---

##### `source_phone_number`<sup>Required</sup> <a name="source_phone_number" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber"></a>

```python
source_phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTestCaseEntryPointVoiceCallEntryPointParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---


### ConnectTestCaseTagsList <a name="ConnectTestCaseTagsList" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectTestCaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectTestCaseTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>]

---


### ConnectTestCaseTagsOutputReference <a name="ConnectTestCaseTagsOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_test_case

connectTestCase.ConnectTestCaseTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectTestCaseTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>

---



