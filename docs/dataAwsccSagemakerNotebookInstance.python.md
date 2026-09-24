# `dataAwsccSagemakerNotebookInstance` Submodule <a name="`dataAwsccSagemakerNotebookInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerNotebookInstance <a name="DataAwsccSagemakerNotebookInstance" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance awscc_sagemaker_notebook_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance#id DataAwsccSagemakerNotebookInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerNotebookInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerNotebookInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerNotebookInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerNotebookInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.additionalCodeRepositories">additional_code_repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.defaultCodeRepository">default_code_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.directInternetAccess">direct_internet_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.instanceMetadataServiceConfiguration">instance_metadata_service_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.lifecycleConfigName">lifecycle_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.notebookInstanceArn">notebook_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.notebookInstanceName">notebook_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.platformIdentifier">platform_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.rootAccess">root_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList">DataAwsccSagemakerNotebookInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_code_repositories`<sup>Required</sup> <a name="additional_code_repositories" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.additionalCodeRepositories"></a>

```python
additional_code_repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_code_repository`<sup>Required</sup> <a name="default_code_repository" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.defaultCodeRepository"></a>

```python
default_code_repository: str
```

- *Type:* str

---

##### `direct_internet_access`<sup>Required</sup> <a name="direct_internet_access" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.directInternetAccess"></a>

```python
direct_internet_access: str
```

- *Type:* str

---

##### `instance_metadata_service_configuration`<sup>Required</sup> <a name="instance_metadata_service_configuration" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.instanceMetadataServiceConfiguration"></a>

```python
instance_metadata_service_configuration: DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a>

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `lifecycle_config_name`<sup>Required</sup> <a name="lifecycle_config_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.lifecycleConfigName"></a>

```python
lifecycle_config_name: str
```

- *Type:* str

---

##### `notebook_instance_arn`<sup>Required</sup> <a name="notebook_instance_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.notebookInstanceArn"></a>

```python
notebook_instance_arn: str
```

- *Type:* str

---

##### `notebook_instance_name`<sup>Required</sup> <a name="notebook_instance_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.notebookInstanceName"></a>

```python
notebook_instance_name: str
```

- *Type:* str

---

##### `platform_identifier`<sup>Required</sup> <a name="platform_identifier" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.platformIdentifier"></a>

```python
platform_identifier: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `root_access`<sup>Required</sup> <a name="root_access" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.rootAccess"></a>

```python
root_access: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.tags"></a>

```python
tags: DataAwsccSagemakerNotebookInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList">DataAwsccSagemakerNotebookInstanceTagsList</a>

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerNotebookInstanceConfig <a name="DataAwsccSagemakerNotebookInstanceConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/sagemaker_notebook_instance#id DataAwsccSagemakerNotebookInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration <a name="DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration()
```


### DataAwsccSagemakerNotebookInstanceTags <a name="DataAwsccSagemakerNotebookInstanceTags" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference <a name="DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion">minimum_instance_metadata_service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration">DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_instance_metadata_service_version`<sup>Required</sup> <a name="minimum_instance_metadata_service_version" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion"></a>

```python
minimum_instance_metadata_service_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration">DataAwsccSagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---


### DataAwsccSagemakerNotebookInstanceTagsList <a name="DataAwsccSagemakerNotebookInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerNotebookInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerNotebookInstanceTagsOutputReference <a name="DataAwsccSagemakerNotebookInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_notebook_instance

dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTags">DataAwsccSagemakerNotebookInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerNotebookInstanceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerNotebookInstance.DataAwsccSagemakerNotebookInstanceTags">DataAwsccSagemakerNotebookInstanceTags</a>

---



