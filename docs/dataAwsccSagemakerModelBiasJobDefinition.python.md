# `dataAwsccSagemakerModelBiasJobDefinition` Submodule <a name="`dataAwsccSagemakerModelBiasJobDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModelBiasJobDefinition <a name="DataAwsccSagemakerModelBiasJobDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition awscc_sagemaker_model_bias_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition#id DataAwsccSagemakerModelBiasJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerModelBiasJobDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerModelBiasJobDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerModelBiasJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModelBiasJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionArn">job_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionName">job_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobResources">job_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasAppSpecification">model_bias_app_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig">model_bias_baseline_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobInput">model_bias_job_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig">model_bias_job_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.stoppingCondition">stopping_condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList">DataAwsccSagemakerModelBiasJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `job_definition_arn`<sup>Required</sup> <a name="job_definition_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionArn"></a>

```python
job_definition_arn: str
```

- *Type:* str

---

##### `job_definition_name`<sup>Required</sup> <a name="job_definition_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobDefinitionName"></a>

```python
job_definition_name: str
```

- *Type:* str

---

##### `job_resources`<sup>Required</sup> <a name="job_resources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.jobResources"></a>

```python
job_resources: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference</a>

---

##### `model_bias_app_specification`<sup>Required</sup> <a name="model_bias_app_specification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasAppSpecification"></a>

```python
model_bias_app_specification: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference</a>

---

##### `model_bias_baseline_config`<sup>Required</sup> <a name="model_bias_baseline_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasBaselineConfig"></a>

```python
model_bias_baseline_config: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference</a>

---

##### `model_bias_job_input`<sup>Required</sup> <a name="model_bias_job_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobInput"></a>

```python
model_bias_job_input: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference</a>

---

##### `model_bias_job_output_config`<sup>Required</sup> <a name="model_bias_job_output_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.modelBiasJobOutputConfig"></a>

```python
model_bias_job_output_config: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.networkConfig"></a>

```python
network_config: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stopping_condition`<sup>Required</sup> <a name="stopping_condition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.stoppingCondition"></a>

```python
stopping_condition: DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tags"></a>

```python
tags: DataAwsccSagemakerModelBiasJobDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList">DataAwsccSagemakerModelBiasJobDefinitionTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelBiasJobDefinitionConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_model_bias_job_definition#id DataAwsccSagemakerModelBiasJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelBiasJobDefinitionJobResources <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources()
```


### DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs()
```


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output()
```


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig()
```


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig()
```


### DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition <a name="DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition()
```


### DataAwsccSagemakerModelBiasJobDefinitionTags <a name="DataAwsccSagemakerModelBiasJobDefinitionTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">volume_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `volume_kms_key_id`<sup>Required</sup> <a name="volume_kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```python
volume_kms_key_id: str
```

- *Type:* str

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources">DataAwsccSagemakerModelBiasJobDefinitionJobResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```python
cluster_config: DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionJobResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionJobResources">DataAwsccSagemakerModelBiasJobDefinitionJobResources</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri">config_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment">environment</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_uri`<sup>Required</sup> <a name="config_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.configUri"></a>

```python
config_uri: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.environment"></a>

```python
environment: StringMap
```

- *Type:* cdktn.StringMap

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification">DataAwsccSagemakerModelBiasJobDefinitionModelBiasAppSpecification</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResource</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName">baselining_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource">constraints_resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baselining_job_name`<sup>Required</sup> <a name="baselining_job_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.baseliningJobName"></a>

```python
baselining_job_name: str
```

- *Type:* str

---

##### `constraints_resource`<sup>Required</sup> <a name="constraints_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.constraintsResource"></a>

```python
constraints_resource: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigConstraintsResourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasBaselineConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">header</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```python
header: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsv</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">line</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `line`<sup>Required</sup> <a name="line" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```python
line: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJson</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">parquet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```python
csv: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```python
json: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `parquet`<sup>Required</sup> <a name="parquet" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```python
parquet: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormat</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">data_captured_destination_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat">dataset_format</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute">features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute">probability_threshold_attribute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_captured_destination_s3_uri`<sup>Required</sup> <a name="data_captured_destination_s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```python
data_captured_destination_s3_uri: str
```

- *Type:* str

---

##### `dataset_format`<sup>Required</sup> <a name="dataset_format" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```python
dataset_format: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `features_attribute`<sup>Required</sup> <a name="features_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.featuresAttribute"></a>

```python
features_attribute: str
```

- *Type:* str

---

##### `inference_attribute`<sup>Required</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `probability_threshold_attribute`<sup>Required</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.probabilityThresholdAttribute"></a>

```python
probability_threshold_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInput</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset">end_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute">features_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute">inference_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute">probability_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute">probability_threshold_attribute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType">s3_data_distribution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode">s3_input_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset">start_time_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `end_time_offset`<sup>Required</sup> <a name="end_time_offset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.endTimeOffset"></a>

```python
end_time_offset: str
```

- *Type:* str

---

##### `features_attribute`<sup>Required</sup> <a name="features_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.featuresAttribute"></a>

```python
features_attribute: str
```

- *Type:* str

---

##### `inference_attribute`<sup>Required</sup> <a name="inference_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.inferenceAttribute"></a>

```python
inference_attribute: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `probability_attribute`<sup>Required</sup> <a name="probability_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityAttribute"></a>

```python
probability_attribute: str
```

- *Type:* str

---

##### `probability_threshold_attribute`<sup>Required</sup> <a name="probability_threshold_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.probabilityThresholdAttribute"></a>

```python
probability_threshold_attribute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_data_distribution_type`<sup>Required</sup> <a name="s3_data_distribution_type" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```python
s3_data_distribution_type: str
```

- *Type:* str

---

##### `s3_input_mode`<sup>Required</sup> <a name="s3_input_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```python
s3_input_mode: str
```

- *Type:* str

---

##### `start_time_offset`<sup>Required</sup> <a name="start_time_offset" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.startTimeOffset"></a>

```python
start_time_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInput</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3Input</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput">batch_transform_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input">ground_truth_s3_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_transform_input`<sup>Required</sup> <a name="batch_transform_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.batchTransformInput"></a>

```python
batch_transform_input: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputBatchTransformInputOutputReference</a>

---

##### `endpoint_input`<sup>Required</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.endpointInput"></a>

```python
endpoint_input: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputEndpointInputOutputReference</a>

---

##### `ground_truth_s3_input`<sup>Required</sup> <a name="ground_truth_s3_input" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.groundTruthS3Input"></a>

```python
ground_truth_s3_input: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputGroundTruthS3InputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobInput</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">s3_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_output`<sup>Required</sup> <a name="s3_output" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```python
s3_output: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputs</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">local_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">s3_upload_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_path`<sup>Required</sup> <a name="local_path" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```python
local_path: str
```

- *Type:* str

---

##### `s3_upload_mode`<sup>Required</sup> <a name="s3_upload_mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```python
s3_upload_mode: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsS3Output</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs">monitoring_outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `monitoring_outputs`<sup>Required</sup> <a name="monitoring_outputs" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```python
monitoring_outputs: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigMonitoringOutputsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig">DataAwsccSagemakerModelBiasJobDefinitionModelBiasJobOutputConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">enable_inter_container_traffic_encryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">enable_network_isolation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_inter_container_traffic_encryption`<sup>Required</sup> <a name="enable_inter_container_traffic_encryption" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```python
enable_inter_container_traffic_encryption: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_network_isolation`<sup>Required</sup> <a name="enable_network_isolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```python
enable_network_isolation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```python
vpc_config: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerModelBiasJobDefinitionNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">max_runtime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition">DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_runtime_in_seconds`<sup>Required</sup> <a name="max_runtime_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```python
max_runtime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition">DataAwsccSagemakerModelBiasJobDefinitionStoppingCondition</a>

---


### DataAwsccSagemakerModelBiasJobDefinitionTagsList <a name="DataAwsccSagemakerModelBiasJobDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference <a name="DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_model_bias_job_definition

dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags">DataAwsccSagemakerModelBiasJobDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerModelBiasJobDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModelBiasJobDefinition.DataAwsccSagemakerModelBiasJobDefinitionTags">DataAwsccSagemakerModelBiasJobDefinitionTags</a>

---



