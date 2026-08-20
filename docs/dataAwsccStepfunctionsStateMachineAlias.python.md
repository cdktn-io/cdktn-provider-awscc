# `dataAwsccStepfunctionsStateMachineAlias` Submodule <a name="`dataAwsccStepfunctionsStateMachineAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStepfunctionsStateMachineAlias <a name="DataAwsccStepfunctionsStateMachineAlias" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/stepfunctions_state_machine_alias#id DataAwsccStepfunctionsStateMachineAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccStepfunctionsStateMachineAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccStepfunctionsStateMachineAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStepfunctionsStateMachineAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.deploymentPreference">deployment_preference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.routingConfiguration">routing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList">DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.stateMachineArn">state_machine_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `deployment_preference`<sup>Required</sup> <a name="deployment_preference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.deploymentPreference"></a>

```python
deployment_preference: DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `routing_configuration`<sup>Required</sup> <a name="routing_configuration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.routingConfiguration"></a>

```python
routing_configuration: DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList">DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList</a>

---

##### `state_machine_arn`<sup>Required</sup> <a name="state_machine_arn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.stateMachineArn"></a>

```python
state_machine_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStepfunctionsStateMachineAliasConfig <a name="DataAwsccStepfunctionsStateMachineAliasConfig" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/stepfunctions_state_machine_alias#id DataAwsccStepfunctionsStateMachineAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStepfunctionsStateMachineAliasDeploymentPreference <a name="DataAwsccStepfunctionsStateMachineAliasDeploymentPreference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference()
```


### DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration <a name="DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference <a name="DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms">alarms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn">state_machine_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms"></a>

```python
alarms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_machine_version_arn`<sup>Required</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn"></a>

```python
state_machine_version_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStepfunctionsStateMachineAliasDeploymentPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreference</a>

---


### DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList <a name="DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference <a name="DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_stepfunctions_state_machine_alias

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn">state_machine_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration">DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_machine_version_arn`<sup>Required</sup> <a name="state_machine_version_arn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn"></a>

```python
state_machine_version_arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration">DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration</a>

---



