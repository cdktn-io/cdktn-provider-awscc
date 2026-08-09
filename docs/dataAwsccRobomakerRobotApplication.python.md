# `dataAwsccRobomakerRobotApplication` Submodule <a name="`dataAwsccRobomakerRobotApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRobomakerRobotApplication <a name="DataAwsccRobomakerRobotApplication" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/robomaker_robot_application awscc_robomaker_robot_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/robomaker_robot_application#id DataAwsccRobomakerRobotApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRobomakerRobotApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRobomakerRobotApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRobomakerRobotApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRobomakerRobotApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/robomaker_robot_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRobomakerRobotApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.currentRevisionId">current_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.robotSoftwareSuite">robot_software_suite</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference">DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList">DataAwsccRobomakerRobotApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `current_revision_id`<sup>Required</sup> <a name="current_revision_id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.currentRevisionId"></a>

```python
current_revision_id: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `robot_software_suite`<sup>Required</sup> <a name="robot_software_suite" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.robotSoftwareSuite"></a>

```python
robot_software_suite: DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference">DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.sources"></a>

```python
sources: DataAwsccRobomakerRobotApplicationSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList">DataAwsccRobomakerRobotApplicationSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRobomakerRobotApplicationConfig <a name="DataAwsccRobomakerRobotApplicationConfig" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/robomaker_robot_application#id DataAwsccRobomakerRobotApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRobomakerRobotApplicationRobotSoftwareSuite <a name="DataAwsccRobomakerRobotApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuite.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuite()
```


### DataAwsccRobomakerRobotApplicationSources <a name="DataAwsccRobomakerRobotApplicationSources" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference <a name="DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuite">DataAwsccRobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRobomakerRobotApplicationRobotSoftwareSuite
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationRobotSoftwareSuite">DataAwsccRobomakerRobotApplicationRobotSoftwareSuite</a>

---


### DataAwsccRobomakerRobotApplicationSourcesList <a name="DataAwsccRobomakerRobotApplicationSourcesList" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRobomakerRobotApplicationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRobomakerRobotApplicationSourcesOutputReference <a name="DataAwsccRobomakerRobotApplicationSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_robomaker_robot_application

dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSources">DataAwsccRobomakerRobotApplicationSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRobomakerRobotApplicationSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRobomakerRobotApplication.DataAwsccRobomakerRobotApplicationSources">DataAwsccRobomakerRobotApplicationSources</a>

---



