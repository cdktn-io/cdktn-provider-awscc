# `dataAwsccCleanroomsAnalysisTemplate` Submodule <a name="`dataAwsccCleanroomsAnalysisTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsAnalysisTemplate <a name="DataAwsccCleanroomsAnalysisTemplate" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_analysis_template#id DataAwsccCleanroomsAnalysisTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsAnalysisTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsAnalysisTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsAnalysisTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisParameters">analysis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList">DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisTemplateIdentifier">analysis_template_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.errorMessageConfiguration">error_message_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference">DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.syntheticDataParameters">synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList">DataAwsccCleanroomsAnalysisTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `analysis_parameters`<sup>Required</sup> <a name="analysis_parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisParameters"></a>

```python
analysis_parameters: DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList">DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList</a>

---

##### `analysis_template_identifier`<sup>Required</sup> <a name="analysis_template_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisTemplateIdentifier"></a>

```python
analysis_template_identifier: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error_message_configuration`<sup>Required</sup> <a name="error_message_configuration" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.errorMessageConfiguration"></a>

```python
error_message_configuration: DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.schema"></a>

```python
schema: DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference">DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.source"></a>

```python
source: DataAwsccCleanroomsAnalysisTemplateSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceOutputReference</a>

---

##### `source_metadata`<sup>Required</sup> <a name="source_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.sourceMetadata"></a>

```python
source_metadata: DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference</a>

---

##### `synthetic_data_parameters`<sup>Required</sup> <a name="synthetic_data_parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.syntheticDataParameters"></a>

```python
synthetic_data_parameters: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tags"></a>

```python
tags: DataAwsccCleanroomsAnalysisTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList">DataAwsccCleanroomsAnalysisTemplateTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsAnalysisTemplateAnalysisParameters <a name="DataAwsccCleanroomsAnalysisTemplateAnalysisParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters()
```


### DataAwsccCleanroomsAnalysisTemplateConfig <a name="DataAwsccCleanroomsAnalysisTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_analysis_template#id DataAwsccCleanroomsAnalysisTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration <a name="DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration()
```


### DataAwsccCleanroomsAnalysisTemplateSchema <a name="DataAwsccCleanroomsAnalysisTemplateSchema" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema()
```


### DataAwsccCleanroomsAnalysisTemplateSource <a name="DataAwsccCleanroomsAnalysisTemplateSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource()
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifacts <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts()
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts()
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation()
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint()
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation()
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadata <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata()
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts()
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes()
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash()
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters()
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters()
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification()
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping()
```


### DataAwsccCleanroomsAnalysisTemplateTags <a name="DataAwsccCleanroomsAnalysisTemplateTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList <a name="DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters">DataAwsccCleanroomsAnalysisTemplateAnalysisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateAnalysisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters">DataAwsccCleanroomsAnalysisTemplateAnalysisParameters</a>

---


### DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---


### DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables">referenced_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema">DataAwsccCleanroomsAnalysisTemplateSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `referenced_tables`<sup>Required</sup> <a name="referenced_tables" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables"></a>

```python
referenced_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema">DataAwsccCleanroomsAnalysisTemplateSchema</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location"></a>

```python
location: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location"></a>

```python
location: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts">additional_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint">entry_point</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_artifacts`<sup>Required</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts"></a>

```python
additional_artifacts: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a>

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint"></a>

```python
entry_point: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifacts</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes">additional_artifact_hashes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash">entry_point_hash</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_artifact_hashes`<sup>Required</sup> <a name="additional_artifact_hashes" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes"></a>

```python
additional_artifact_hashes: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a>

---

##### `entry_point_hash`<sup>Required</sup> <a name="entry_point_hash" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash"></a>

```python
entry_point_hash: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata">DataAwsccCleanroomsAnalysisTemplateSourceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts"></a>

```python
artifacts: DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata">DataAwsccCleanroomsAnalysisTemplateSourceMetadata</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource">DataAwsccCleanroomsAnalysisTemplateSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.artifacts"></a>

```python
artifacts: DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource">DataAwsccCleanroomsAnalysisTemplateSource</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue">is_predictive_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `is_predictive_value`<sup>Required</sup> <a name="is_predictive_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue"></a>

```python
is_predictive_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping">column_mapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_mapping`<sup>Required</sup> <a name="column_mapping" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping"></a>

```python
column_mapping: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification">column_classification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon">epsilon</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore">max_membership_inference_attack_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_classification`<sup>Required</sup> <a name="column_classification" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification"></a>

```python
column_classification: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a>

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon"></a>

```python
epsilon: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_membership_inference_attack_score`<sup>Required</sup> <a name="max_membership_inference_attack_score" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore"></a>

```python
max_membership_inference_attack_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters">ml_synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ml_synthetic_data_parameters`<sup>Required</sup> <a name="ml_synthetic_data_parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters"></a>

```python
ml_synthetic_data_parameters: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters</a>

---


### DataAwsccCleanroomsAnalysisTemplateTagsList <a name="DataAwsccCleanroomsAnalysisTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsAnalysisTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsAnalysisTemplateTagsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_analysis_template

dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags">DataAwsccCleanroomsAnalysisTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsAnalysisTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags">DataAwsccCleanroomsAnalysisTemplateTags</a>

---



