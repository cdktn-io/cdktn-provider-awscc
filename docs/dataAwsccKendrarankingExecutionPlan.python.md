# `dataAwsccKendrarankingExecutionPlan` Submodule <a name="`dataAwsccKendrarankingExecutionPlan` Submodule" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendrarankingExecutionPlan <a name="DataAwsccKendrarankingExecutionPlan" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendraranking_execution_plan awscc_kendraranking_execution_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendraranking_execution_plan#id DataAwsccKendrarankingExecutionPlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccKendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccKendrarankingExecutionPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccKendrarankingExecutionPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccKendrarankingExecutionPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendraranking_execution_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendrarankingExecutionPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.capacityUnits">capacity_units</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference">DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.executionPlanId">execution_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList">DataAwsccKendrarankingExecutionPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.capacityUnits"></a>

```python
capacity_units: DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference">DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_plan_id`<sup>Required</sup> <a name="execution_plan_id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.executionPlanId"></a>

```python
execution_plan_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.tags"></a>

```python
tags: DataAwsccKendrarankingExecutionPlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList">DataAwsccKendrarankingExecutionPlanTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendrarankingExecutionPlanCapacityUnits <a name="DataAwsccKendrarankingExecutionPlanCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnits.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnits()
```


### DataAwsccKendrarankingExecutionPlanConfig <a name="DataAwsccKendrarankingExecutionPlanConfig" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/kendraranking_execution_plan#id DataAwsccKendrarankingExecutionPlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendrarankingExecutionPlanTags <a name="DataAwsccKendrarankingExecutionPlanTags" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference <a name="DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits">rescore_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnits">DataAwsccKendrarankingExecutionPlanCapacityUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rescore_capacity_units`<sup>Required</sup> <a name="rescore_capacity_units" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.rescoreCapacityUnits"></a>

```python
rescore_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendrarankingExecutionPlanCapacityUnits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanCapacityUnits">DataAwsccKendrarankingExecutionPlanCapacityUnits</a>

---


### DataAwsccKendrarankingExecutionPlanTagsList <a name="DataAwsccKendrarankingExecutionPlanTagsList" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccKendrarankingExecutionPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccKendrarankingExecutionPlanTagsOutputReference <a name="DataAwsccKendrarankingExecutionPlanTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_kendraranking_execution_plan

dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTags">DataAwsccKendrarankingExecutionPlanTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccKendrarankingExecutionPlanTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendrarankingExecutionPlan.DataAwsccKendrarankingExecutionPlanTags">DataAwsccKendrarankingExecutionPlanTags</a>

---



